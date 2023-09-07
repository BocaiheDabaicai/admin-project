// 路由全局守卫，鉴别路由是否可访问
import router from '@/router'
// 引入进度条,取消加载圆圈
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
nprogress.configure({showSpinner:false})
// 引入用户数据仓库
import useUserStore from "@/store/modules/user.ts";
import pinia from "@/store";
// 引入全局内容
import setting from "@/setting.ts";

let userSotre = useUserStore(pinia);

console.log('全局守卫开启')
// 全局前置守卫
router.beforeEach(async (to,from,next) => {
    document.title = `${setting.title} - ${to.meta.title}`

    nprogress.start()

    let token = userSotre.token
    let username = userSotre.$state.name

    if (token){
        if(to.path !== '/login'){
            if (username){
                next()
            }else{
                try{
                    await userSotre.userInfo()
                    next()
                }catch (error) {
                    userSotre.logout()
                    next({path:'/login',query:{redirect:to.path}})
                }
            }
        }else{
            next({path:'/'})
        }
    }else{
        if (to.path !== '/login'){
            next({path:'/login',query:{redirect:to.path}})
        }else {
            next()
        }
    }

})

// 全局后置守卫
router.afterEach((to, from) => {
    nprogress.done()
})