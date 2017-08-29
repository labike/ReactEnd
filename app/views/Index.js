// 引入react
import React, { Component } from 'react'

// 引入react-router模块
import { Link } from 'react-router';
//antd布局
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

//css文件
import '../style/index.css'

// 以es6 class 的方式来声明组件
class Index extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // return 内最外层必须包裹一层html标签并且第一排不能写注释，
        return(
            <div className="welcome">welcome to ReactEnd</div>
        )
    }
}

//导出组件
export default Index;
