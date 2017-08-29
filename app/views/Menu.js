// 引入react
import React, { Component } from 'react'

// 引入react-router模块
import { hashHistory,Link } from 'react-router';
//antd布局
import { Layout,Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import {
   showLoginModal
} from "../actions/login";
import {
    connect
} from "react-redux";
//css文件
import '../style/index.css'

// 以es6 class 的方式来声明组件
class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    
    //登录
    handleLogin() {
        hashHistory.push('/login');
        this.props.dispatch(showLoginModal(true));
    }

    //退出登录，清除localstorge中存储的登录状态并刷新页面
    loginOut() {
        localStorage.removeItem('username');
        location.reload();
    }
   
    render() {
        // return 内最外层必须包裹一层html标签并且第一排不能写注释，
        return(
            <Layout>
                <header>
                {localStorage.getItem("username")?
                    <span className="username">用户名：{localStorage.getItem("username")}
                        <Button className="login-out" onClick={()=>this.loginOut()}>退出登录</Button>
                    </span>:
                    <Button className="login-btn" onClick={()=>this.handleLogin()}>登录</Button>
                }
                </header>
                <Layout>
                    <Sider>
                        {/* 侧边栏部分 */}
                        <ul className="menu-slide">
                            <li><Link to="/">首页</Link></li>
                            <li><Link to="/user">用户列表</Link></li>
                        </ul>
                    </Sider>
                    <Content>
                        {/* 配合路由实现页面跳转 */}
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>    
        )
    }
}
function select(state){
    return{
        
    }
}

//导出组件（这里的名字需与引入时保持一致）
export default connect(select) (Menu);
