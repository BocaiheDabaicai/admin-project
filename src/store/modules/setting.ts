// 实现折叠功能的仓库
import {defineStore} from 'pinia'

let useLayoutSettingStore = defineStore('SettingStore',{
    state(){
        return {
            fold:false,  // 控制组件折叠
            refresh:false   // 刷新状态
        }
    }
})

export default useLayoutSettingStore