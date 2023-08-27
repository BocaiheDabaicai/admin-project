// 引入App生成器
import {createApp} from 'vue'
// import './style.css'

// 引入组件库
import ElementPlus from 'element-plus'

// 引入全局文字、UI组件样式、入口文件
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import App from './App.vue'
import 'virtual:svg-icons-register'

// console.log(import.meta.env)

// 引入全局组件注册器
//@ts-ignore
import globalComponent from '@/components/index.ts';

// 引入全局样式
import '@/styles/index.scss'
// 引入路由组件
import router from './router'
// 引入状态管理器
import pinia from "@/store";
// 引入动画样式
import 'animate.css'

createApp(App)
    .use(ElementPlus, {
        locale: zhCn
    })
    .use(globalComponent)
    .use(router)
    .use(pinia)
    .mount('#app')

