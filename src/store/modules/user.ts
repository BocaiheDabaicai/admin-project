// 用户小仓库
import {defineStore} from 'pinia';
//引入接口
import {reqLogin} from '@/api/user'
// 引入数据类型
import type {loginForm, loginResponseData} from "@/api/user/type.ts";
import type {UserState} from "@/store/modules/types/type.ts";
// 引入本地存储化方法
import {GET_TOKEN, SET_TOKEN} from "@/utils/token.ts";
// 引入路由对象
import {constantRoutes} from "@/router/routes.ts";

// 创建用户小仓库
let useUserStore = defineStore('User', {
    state: ():UserState => {
        return {
            token:GET_TOKEN(),//用户唯一标识
            menuRoutes: constantRoutes
        }
    },
    // 异步|逻辑的地方
    actions: {
        async userLogin(data: loginForm) {
            // 登录请求
            let result:loginResponseData = await reqLogin(data)
            if(result.code === 200){
                this.token = result.token
                console.log(result.data.token)
                // 本地持久化存储
                SET_TOKEN((result.data.token as string))
                return 'ok'
            }else{
                return Promise.reject(new Error(result.data.message));
            }
            // console.log(result)
        }
    },
    getters: {}
})

export default useUserStore