// 引入react
import React, { Component } from 'react'
// 引入react-router模块
import { Link,hashHistory } from 'react-router';
//引入action 函数
import {
    showLoginModal,UserValid
} from "../actions/login";
//引入connect
import {
    connect
} from "react-redux";
//css文件
import '../style/index.css'
//引入antd组件
import { Form, Icon, Input, Button, Checkbox, Modal } from 'antd';
const FormItem = Form.Item;

// 以es6 class 的方式来声明组件
class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    //登录验证
    userValidFun() {
        //antd 表单验证函数，values是表单中input输入的值
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //通过dispatch调用action中的函数，将用户名密码传到后台验证
                this.props.dispatch(UserValid(values));
            }
        });
    }

    //关闭弹出框
    handleCancel() {
        this.props.dispatch(showLoginModal(false));
        hashHistory.push("/user");
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        // return 内最外层必须包裹一层html标签并且第一排不能写注释，
        return(
            <Modal
                title="登录"
                width='300px'
                visible={this.props.display}
                onCancel={()=>this.handleCancel()}
                footer={null}
            >  
                {/* footer={null}取消弹出框下面的确定取消按钮 */}
                {/* modal和form表单都是antd的组件，如有疑问可以查看官网的api */}
                <Form className="login-form" onSubmit={()=>this.userValidFun()}>
                    <FormItem>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入用户名' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入用户名" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住密码</Checkbox>
                        )}
                    <a className="login-form-forgot" href="">忘记密码</a>
                    {/* JSX语法中添加class需要写成className */}
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    Or <a href="">免费注册</a>
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}
//antd中使用了form表单
const Login = Form.create()(LoginForm);

//通过select函数可以取得全局的state
function select(state){
    return{
        display:state.login.display,
    }
}

//导出组件
export default connect(select) (Login);
