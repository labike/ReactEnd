import * as Ajax from './ajax';
import{
    hashHistory
} from "react-router";
//定义常量
export const GET_USER_DETAIL = "GET_USER_DETAIL"
export const GET_USER_ONE = "GET_USER_ONE"
export const GET_MODAL_SHOW = "GET_MODAL_SHOW"

//用户
export function GetUserDetail(userDetail,totalElements,currentPage){
    return{
        type:GET_USER_DETAIL,
        userDetail,totalElements,currentPage
    }
}
//获取所有用户列表
export function ascyGetDetails(data){
    return function (dispatch){
        Ajax.getAjax("http://localhost:3000/user",function(response){
            if (response.data) {
                let number = 1;
                if (data) {
                    number = data.page
                }
                dispatch(GetUserDetail(response.data,response.data.length,number));
            } else {
                dispatch(GetUserDetail([],0,1));
            }
        });
    }
}
//查询用户
export function SearchUser(name){
    return function (dispatch){
        if (name) {
            // _like表示json-server的模糊查询，这里表示name中是否包含参数name值
            Ajax.getAjax("http://localhost:3000/user?name_like="+name,function(response){
                if(response.data.length > 0){
                    dispatch(GetUserDetail(response.data));
                } else {
                    dispatch(GetUserDetail([],0,1));
                }
            });
        } else {
            dispatch(ascyGetDetails());
        }
    }
}

//删除用户
export function DelUser(id){
    return function (dispatch){
        Ajax.deleteAjax("http://localhost:3000/user/"+id,function(response){
            if(response.data){
                dispatch(ascyGetDetails());
            }
        });
    }
}

//新增与修改用户，通过有无id判断是添加还是删除
export function AddUser(data){
    return function (dispatch){
        if (data.id) {
            Ajax.putAjax("http://localhost:3000/user/"+data.id,data,function(response){
                if(response.data){
                    dispatch(ascyGetDetails());
                    dispatch(showModal(false));
                }
            });
        } else {
            Ajax.postAjax("http://localhost:3000/user",data,function(response){
                if(response.data){
                    dispatch(ascyGetDetails());
                    dispatch(showModal(false));
                }
            });
        }
    }
}

//点击编辑时获取每行数据
export function getUserone(userOne){
    return{
        type:GET_USER_ONE,
        userOne
    }
}

//新增或编辑时控制弹出框的显示与隐藏,将状态值保存至modaldisplay中
export function showModal(modaldisplay){
    return{
        type:GET_MODAL_SHOW,
        modaldisplay
    }
}

