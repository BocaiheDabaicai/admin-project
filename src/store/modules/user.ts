// 用户小仓库
import {defineStore} from 'pinia';
//引入接口
import {reqLogin} from '@/api/user'
// 引入数据类型
import type {loginForm} from "@/api/user/type.ts";
// 创建用户小仓库
let useUserStore = defineStore('User', {
    state: () => {
        return {
            token:localStorage.getItem("TOKEN"),//用户唯一标识
        }
    },
    // 异步|逻辑的地方
    actions: {
        async userLogin(data: loginForm) {
            // 登录请求
            let result = await reqLogin(data)
            if(result.code === 200){
                this.token = result.token
                console.log(result.data.token)
                // 本地持久化存储
                localStorage.setItem("TOKEN",result.data.token)
            }else{

            }
            // console.log(result)
        }
    },
    getters: {}
})

export default useUserStore