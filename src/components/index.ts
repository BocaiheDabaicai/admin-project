import SvgIcon from './svgIcon/index.vue';


const allGlobalComponent = {
    SvgIcon
}

// console.log(allGlobalComponent);
// console.log(Object.entries(allGlobalComponent));
// console.log(Object.keys(allGlobalComponent));

export default {
    // 务必叫做 install 方法
    install(App) {
        Object.keys(allGlobalComponent).forEach(item => {
            App.component(item, allGlobalComponent[item])
        })
    }
}