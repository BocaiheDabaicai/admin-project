export  const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login', // 命名路由
        meta:{
            title:'登录',
            show:false
        }
    },
    {
        // 登录成功后使用的路由
        path: '/',
        component: () => import('@/layout/index.vue'),
        name: 'layout', // 命名路由
        children:[
            {
                path:'/home',
                component:() => import('@/views/home/index.vue'),
                meta:{
                    title:'首页',
                    show:true
                }
            }
        ],
        meta:{
            title:'layout',
            show:true
        }
    },
    {
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404', // 命名路由
        meta:{
            title:'404',
            show:false
        }
    },
    {
        // 任意路由
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'Any',
        meta:{
            title:'任意',
            show:false
        }
    }
]