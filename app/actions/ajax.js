{/*
    本文件用于ajax封装，避免每次发ajax时代码重复率高
*/}


import { notification,Modal } from 'antd'
//引入axios用于ajax
import axios from 'axios';
//antd模态框的一种，确认模态框
const confirm = Modal.confirm;

//ajax post方式
export function postAjax(url,data,successCallback){
    confirm({
        title: '提示',//弹出框的标题
        content: '确认提交吗？',//弹出框的描述
        onOk() {//弹出框点击确定时触发
            axios.post(url,data)
                .then(function (response) {
                    successCallback(response);
                    //notification  antd警告提示框,可以添加回调函数，详情见antd官网API
                    notification.success({
                        message: '成功',
                        description: `创建成功`,
                        duration: 2,//设置显示时间
                    });
                })
                .catch(function (error) {
                    notification.error({
                        message: '失败',
                        description: `创建失败，请稍后重试`,
                        duration: 2,
                    });
                });
        },
        onCancel() {//弹出框点击确定时触发

        },
    });
}

//ajax put方式
export function putAjax(url,data,successCallback){
    confirm({
        title: '提示',//弹出框的标题
        content: '确认提交吗？',//弹出框的描述
        onOk() {//弹出框点击确定时触发
            axios.put(url,data)
                .then(function (response) {
                    successCallback(response);
                    //notification  antd警告提示框,可以添加回调函数，详情见antd官网API
                    notification.success({
                        message: '成功',
                        description: `更新成功`,
                        duration: 2,//设置显示时间
                    });
                })
                .catch(function (error) {
                    notification.error({
                        message: '失败',
                        description: `更新失败，请稍后重试`,
                        duration: 2,
                    });
                });
        },
        onCancel() {//弹出框点击确定时触发

        },
    });
}

//ajax get方式
export function getAjax(url,successCallback){
    axios.get(url)
    .then(function (response) {
       successCallback(response)
    })
}

//ajax delete方式
export function deleteAjax(url,successCallback){
    confirm({
        title: '提示',
        content: '确认删除吗？',
        onOk() {
            axios.delete(url)
                .then(function (response) {
                    successCallback(response);
                    notification.success({
                        message: '成功',
                        description: `删除成功`,
                        duration: 2,
                    });
                })
                .catch(function (error) {
                    notification.error({
                        message: '失败',
                        description: `删除失败，请稍后重试`,
                        duration: 2,
                    });
                });
        },
        onCancel() {
           
        },
    });
}