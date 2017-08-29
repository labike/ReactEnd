import { GET_USER_DETAIL, GET_USER_ONE,GET_MODAL_SHOW } from '../actions/user'
let init={
    userDetail:[],
    totalElements:0,
    currentPage:0,
    userOne:'',
    modaldisplay:false
};
export default function user(state=init,action){
    switch(action.type){
        case GET_USER_DETAIL:
            return Object.assign({},state,{userDetail:action.userDetail,totalElements:action.totalElements,currentPage:action.currentPage});
        case GET_USER_ONE:
            return Object.assign({},state,{userOne:action.userOne});
        case GET_MODAL_SHOW:
            return Object.assign({},state,{modaldisplay:action.modaldisplay});
        default :
            return state;
    }
}

