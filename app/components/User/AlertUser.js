// 引入react
import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import {
    AddUser,showModal
} from "../../actions/user";
import {
    connect
} from "react-redux";
import { Input,Button,Modal,Form,Radio} from 'antd';
const RadioGroup = Radio.Group;
const FormItem = Form.Item;

//引入样式
import '../../style/index.css'
// 以es6 class 的方式来声明组件(目前官方推荐的写法)
class userFom extends React.Component {
    constructor(props) {
        super(props);
       
    }
    //点击取消或遮罩层时关闭弹出框
    closeModal() {
        this.props.dispatch(showModal(false));
        this.props.form.resetFields();
    }

    //提交表单
    handleSubmit() {
        const {userOne} =this.props;
        //通过验证后，获取表单的值，values表示表单的值
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (userOne.id) {
                    values.id = userOne.id;
                    this.props.dispatch(AddUser(values));
                    this.props.form.resetFields();
                } else {
                    this.props.dispatch(AddUser(values));
                    this.props.form.resetFields();
                    
                }
            }
        });
    }
    
    render() {
        const { userOne,modaldisplay } = this.props;
        // 表单验证
        const { getFieldDecorator } = this.props.form;
        // 控制label和input的布局(x轴)
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 17 },
        };
        return(
            <Modal title = {userOne.id?"编辑用户":"新增用户"} visible = {modaldisplay} onOk = {()=>this.handleSubmit()} onCancel = {()=>this.closeModal()} >
                {/* onOk 点击确定时触发，onCancel 点击遮罩层及取消按钮触发*/}
                <Form>
                    <FormItem {...formItemLayout} label="姓名">
                        {getFieldDecorator('name', {
                            initialValue: userOne.name,
                            rules: [{
                                required: true, message: '用户姓名不能为空!',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="账户">
                        {getFieldDecorator('username', {
                            initialValue: userOne.username,
                            rules: [{
                                required: true, message: '登录账户不能为空!',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="邮箱">
                        {getFieldDecorator('email', {
                            initialValue: userOne.email,
                            rules: [{
                                required: true, message: '用户邮箱不能为空!',
                            },{
                                type: 'email',
                                message: '请输入正确邮箱地址!',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="密码">
                        {getFieldDecorator('password', {
                           
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem { ...formItemLayout} label = "状态" >
                        {getFieldDecorator('user_type', {
                            initialValue: userOne.user_type || 0
                        })(
                            <RadioGroup >
                                <Radio value = {0} > 普通用户 </Radio>
                                <Radio value = {1} > 标准会员 </Radio>
                                <Radio value = {2} > 高级会员 </Radio>
                            </RadioGroup >
                        )}
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}
const AlertUser = Form.create()(userFom)

function select(state){
    return{
        userOne:state.user.userOne,
        modaldisplay:state.user.modaldisplay,
    }
}

//导出组件
export default connect(select) (AlertUser);

