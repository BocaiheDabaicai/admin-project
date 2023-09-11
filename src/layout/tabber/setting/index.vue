<template>
  <el-button icon="Refresh" color="#111" circle @click="refresh"></el-button>
  <el-button icon="FullScreen" color="#111" circle @click="fullScreen"></el-button>
  <el-button icon="Setting" color="#111" circle></el-button>
  <el-avatar style="width: 24px;height: 24px;margin: 0 12px" :src="userStore.avatar" />
  <el-dropdown>
    <span  style="color: white" class="el-dropdown-link">
      {{ userStore.name }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu style="background-color: #1a1b1e;" >
        <el-dropdown-item><span style="color: #4cb0d4" @click="logout">退出登录</span></el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts" name="Setting">
// 获取设置仓库
import useLayoutSettingStore from "@/store/modules/setting.ts";
import useUserStore from "@/store/modules/user.ts";
import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const route = useRoute()

let layoutSettingStore = useLayoutSettingStore()
let userStore = useUserStore()
const refresh = function(){
  layoutSettingStore.refresh = !layoutSettingStore.refresh
}

const fullScreen = function () {
  // 获取当前界面是否全屏的结果
  let full = document.fullscreenElement;

  if(!full) document.documentElement.requestFullscreen()
  else document.exitFullscreen()
}

const logout = async function(){
  // 退出登录
  await userStore.logout()
  await router.push({path:'/login',query:{redirect:route.path}})
}
</script>

<style scoped lang="scss">

</style>