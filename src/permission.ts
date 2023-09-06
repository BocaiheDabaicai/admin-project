// 路由全局守卫，鉴别路由是否可访问
import router from '@/router'
// 引入进度条
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'


console.log('全局守卫开启')
// 全局前置守卫
router.beforeEach((to,from,next) => {
    nprogress.start()
    next() // 路由放行
})

// 全局后置守卫
router.afterEach((to, from) => {
    nprogress.done()
})