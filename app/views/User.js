// 引入react
import React, { Component } from 'react'
import { Link } from 'react-router';
//引入action 函数
import {
    DelUser,ascyGetDetails,GetUserDetail,AddUser,showModal,SearchUser,getUserone
} from "../actions/user";
import {
    connect
} from "react-redux";
//引入 antd UI框架中的组件
import { Layout,Breadcrumb,Table,Button,Input} from 'antd';
const { Content } = Layout;
//引入弹出框Form表单
import AlertUser from "../components/User/AlertUser"

// 以es6 class 的方式来声明组件
class User extends React.Component {
    constructor(props) {
        super(props);

    }
   
    //删除用户
    userDel(id) {
        this.props.dispatch(DelUser(id));
    };

    //编辑用户
    toEdit(record) {
        //获取单行数据,存储在userOne中
        this.props.dispatch(getUserone(record));
        //显示弹出框
        this.props.dispatch(showModal(true));
    }

    //添加用户
    toAdd() {
         this.props.dispatch(showModal(true));
         this.props.dispatch(getUserone(''));
    }
    //查询用户
    toSearch() {
        let name = this.refs.search.refs.input.value;
        this.props.dispatch(SearchUser(name));
    }
    //重置表单
    toReset() {
        this.props.dispatch(ascyGetDetails());
        this.refs.search.refs.input.value = null;
    }
    componentDidMount() {
        //获取所有用户信息
        this.props.dispatch(ascyGetDetails());
        this.props.dispatch(GetUserDetail([],0,1));
    }
    render() {
        var {
            userDetail,
            totalElements,
            dispatch,
            currentPage,
            userOne,
        }=this.props;
        {/* 配置Table的分页信息 */}
        const pagination = {
            current:currentPage,
            total: totalElements,
            showSizeChanger: false,
            pageSize:10,
            //当表格有变化时，如：点击分页  current是当前页面页码
            onChange(current){
                var data={
                    "page": current,
                    "pageSize": 10,
                };
                dispatch(ascyGetDetails(data));
            }
        };
        {/* antd Table的表头设置,每列需加上key,dataIndex需与后台传的数据名称一致 */}
        const columns = [{
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
                width:'50px', //设置列宽度
            }, {
                title: '昵称',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: 'username',
                dataIndex: 'username',
                key: 'username',
            }, {
                title: '邮箱',
                dataIndex: 'email',
                key: 'email',
            }, {
                title: '状态',
                dataIndex: 'user_type',
                key: 'user_type',
                render: (text, record) => (//判断显示格式
                    record.user_type === 0 ?  '普通用户' : record.user_type === 1 ? '标准会员' :  '高级会员'
                ),
            },{
                title: '操作',
                key: 'action',
                render: (text, record) => (//record表示单行数据
                    <span >
                        <Button onClick={()=>this.toEdit(record)}> 编辑 </Button>
                        <Button onClick={()=>this.userDel(record.id)}> 删除 </Button>
                    </span >
                ),
            }
        ]
        // return 内最外层必须包裹一层html标签并且第一排不能写注释，
        return(
            <Layout>
                <Content>
                    <div className="user-header">
                        <span className = "user-title" > 用户列表 </span>
                        <Input placeholder = "姓名" className="user-input" ref="search" />
                        <Button onClick={()=>this.toSearch()}> 查询 </Button>
                        <Button onClick={()=>this.toAdd()} > 添加 </Button>
                        <Button onClick={()=>this.toReset()} > 重置 </Button>
                         {/* antd 面包屑组件*/}
                        <Breadcrumb>
                            <Breadcrumb.Item > < Link to = "/" > 首页 </Link></Breadcrumb.Item >
                            <Breadcrumb.Item > 用户列表 </Breadcrumb.Item>
                        </Breadcrumb >
                    </div>
                     <div style = {{ background: '#fff',minHeight: 360}} >
                         {/* 使用antd Table组件方式 columns表头数据，dataSource需展示的数据，pagination分页信息*/}
                        <Table rowKey='id' columns = {columns} dataSource = { userDetail } pagination = {pagination} bordered />
                    </div>
                    {/* 弹出框组件 */}
                    <AlertUser />
                </Content>
            </Layout>
        )
    }
}

function select(state){
    return{
        userDetail:state.user.userDetail,
        totalElements:state.user.totalElements,
        currentPage:state.user.currentPage,
        userOne:state.user.userOne,
    }
}

//导出组件
export default connect(select) (User);
