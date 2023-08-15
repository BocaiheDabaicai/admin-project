import {createApp} from 'vue'
// import './style.css'
import ElementPlus from 'element-plus'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import App from './App.vue'

import 'virtual:svg-icons-register'

// console.log(import.meta.env)
//@ts-ignore
import globalComponent from '@/components/index.ts';

import '@/styles/index.scss'

import router from './router'

import pinia from "@/store";


createApp(App)
    .use(ElementPlus, {
        locale: zhCn
    })
    .use(globalComponent)
    .use(router)
    .use(pinia)
    .mount('#app')

