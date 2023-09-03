import SvgIcon from './svgIcon/index.vue';

// 引入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const allGlobalComponent: any = {
    SvgIcon
}

export default {
    // 务必叫做 install 方法
    install(App: any) {
        Object.keys(allGlobalComponent).forEach(item => {
            App.component(item, allGlobalComponent[item])
        })

        // 图标组件注册
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            App.component(key, component)
        }
    }
}