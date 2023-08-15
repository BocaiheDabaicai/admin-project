// 对axios进行二次封装
import axios from 'axios'
import {ElMessage} from "element-plus";

let request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use((config) => {
    // 全局配置，例如token


    return config
})

// 响应拦截器
request.interceptors.response.use((response) => {


    // ElMessage.success('请求成功')

    // 拿到简化数据
    return response.data
}, (error) => {
    let message = '';

    let status = error.response.status;
    switch (status) {
        case 401:
            message = 'Token过期'
            break;
        case 403:
            message = '无权访问'
            break
        case 404:
            message = '请求地址出错'
            break
        case 500:
            message = '服务器出现问题'
            break
        default:
            message = '网络出现问题'
            break
    }
    ElMessage({
        type: 'error',
        message
    })

    return Promise.reject(error)
})

export default request




