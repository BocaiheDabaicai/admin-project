export  const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'Login', // 命名路由
        meta:{
            title:'登录',
            show:false
        }
    },
    {
        // 登录成功后使用的路由
        path: '/',
        component: () => import('@/layout/index.vue'),
        name: 'Layout', // 命名路由
        redirect:'/home',
        children:[
            {
                path:'/home',
                component:() => import('@/views/home/index.vue'),
                meta:{
                    title:'首页',
                    show:true,
                    icon:'House'
                }
            }
        ],
        meta:{
            title:'layout',
            show:true
        }
    },
    {
        path:'/right',
        component:() => import('@/layout/index.vue'),
        name:'Right',
        children:[
            {
                path:'/right/user',
                component:()=>import('@/views/right/user/index.vue'),
                name:'User',
                meta:{
                    title:'用户管理',
                    show:true,
                    icon:'User'
                }
            },
            {
                path:'/right/role',
                component:()=>import('@/views/right/role/index.vue'),
                name:'Role',
                meta:{
                    title:'角色管理',
                    show:true,
                    icon:'Avatar'
                }
            },
            {
                path:'/right/menu',
                component:()=>import('@/views/right/menu/index.vue'),
                name:'Menu',
                meta:{
                    title:'菜单管理',
                    show:true,
                    icon:"Suitcase"
                }
            }
        ],
        meta:{
            title:'权限管理',
            show:true,
            icon:'Key'
        }
    },
    {
        path:'/good',
        component:()=> import('@/layout/index.vue'),
        name:'Good',
        children:[
            {
                path:'/good/attributes',
                component:()=>import('@/views/good/attributes/index.vue'),
                name:'Attributes',
                meta:{
                    title:'属性管理',
                    icon:'SuitcaseLine',
                    show:true,
                }
            },
            {
                path:'/good/sku',
                component:()=>import('@/views/good/sku/index.vue'),
                name:'Sku',
                meta:{
                    title:'标准化产品单元',
                    icon:'Box',
                    show:true,
                }
            },
            {
                path:'/good/spu',
                component:()=>import('@/views/good/spu/index.vue'),
                name:'Spu',
                meta:{
                    title:'库存量单位',
                    icon:'Refrigerator',
                    show:true,
                }
            },
            {
                path:'/good/trademark',
                component:()=>import('@/views/good/trademark/index.vue'),
                name:'Trademark',
                meta:{
                    title:'商标管理',
                    icon:'Shop',
                    show:true,
                }
            }
        ],
        meta:{
            title:'商品管理',
            show:true,
            icon:'Handbag'
        }
    },
    {
        path:'/screen',
        component:() => import('@/views/screen/index.vue'),
        name:'Screen',
        meta:{
            show:true,
            title:'数据大屏',
            icon:'DataLine'
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