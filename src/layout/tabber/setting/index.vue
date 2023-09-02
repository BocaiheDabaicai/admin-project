<template>
  <el-button icon="Refresh" color="#111" circle @click="refresh"></el-button>
  <el-button icon="FullScreen" color="#111" circle></el-button>
  <el-button icon="Setting" color="#111" circle></el-button>
  <el-avatar style="width: 24px;height: 24px;margin: 0 12px" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
  <el-dropdown>
    <span  style="color: white" class="el-dropdown-link">
      Admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu style="background-color: #1a1b1e;" >
        <el-dropdown-item><span style="color: white" >退出登录</span></el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts" name="Setting">
// 获取设置仓库
import useLayoutSettingStore from "@/store/modules/setting.ts";

let layoutSettingStore = useLayoutSettingStore()

const refresh = function(){
  layoutSettingStore.refresh = !layoutSettingStore.refresh
}
</script>

<style scoped lang="scss">

</style>