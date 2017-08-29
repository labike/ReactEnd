//引入react,react-dom
import React from 'react';
import { render } from 'react-dom';
import {
    Provider
}from "react-redux";

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import store from "./store/store";
// 引入Ant-Design样式
import "antd/dist/antd.min.css";
//引入全局样式
import './style/index.css'

//引入自定义组件
import Login from "./views/Login";//登录页面
import User from "./views/User"//用户列表
import Menu from "./views/Menu"//侧边栏菜单
import Index from "./views/Index"//欢迎页面

// 配置路由
render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/login" component={Login} />
            <Route path="/" component={Menu} >
                <IndexRoute component={Index}/>
                <Route path="user" component={User} />
            </Route>
        </Router>
    </Provider>
),document.getElementById('content'));