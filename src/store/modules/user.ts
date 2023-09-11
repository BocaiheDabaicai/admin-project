// 用户小仓库
import {defineStore} from 'pinia';
//引入接口
import {reqLogin, reqUserInfo, reqLogout} from '@/api/user'
// 引入数据类型
// import type {loginForm, loginResponseData} from "@/api/user/type.ts";
import type {UserState} from "@/store/modules/types/type.ts";
// 引入本地存储化方法
import {GET_TOKEN, REMOVE_TOKEN, SET_TOKEN} from "@/utils/token.ts";
// 引入路由对象
import {constantRoutes} from "@/router/routes.ts";

// 创建用户小仓库
let useUserStore = defineStore('User', {
    state: (): UserState => {
        return {
            token: GET_TOKEN(),//用户唯一标识
            menuRoutes: constantRoutes,
            name: '',
            avatar: ''
        }
    },
    // 异步|逻辑的地方
    actions: {
        async userLogin(data: any) {
            // 登录请求
            let result: any = await reqLogin(data)

            if (result.code === 200) {
                this.token = result.data
                // 本地持久化存储
                SET_TOKEN((result.data as string))
                return 'ok'
            } else {
                return Promise.reject(new Error(result.data));
            }
            // console.log(result)
        },
        async userInfo() {
            // 获取用户信息
            let userInfo = await reqUserInfo()
            console.log(userInfo)
            if (userInfo.code === 200) {
                this.name = userInfo.data.name
                this.avatar = userInfo.data.avatar
                return 'ok'
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        async logout() {
            let result = await reqLogout()
            console.log(result)
            if(result.code === 200){
                // 退出用户登录
                this.name = ''
                this.token = ''
                this.avatar = ''
                REMOVE_TOKEN()
                return 'ok';
            }else{
                return Promise.reject(new Error(result.message))
            }

        }
    },
    getters: {}
})

export default useUserStore