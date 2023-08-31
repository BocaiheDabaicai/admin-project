<template>
  <div class="layout-container">
    <div class="layout-slider">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu
            :default-active="route.path"
            class="el-menu-self"
            background-color="#1a1b1e"
            text-color="white"
            active-text-color="#3ba7f3"
            :collapse="false"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout-topper">
      <Tabber></Tabber>
    </div>
    <div class="layout-main">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
// 路由引入
import {useRoute} from "vue-router"
// 组件引入
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabber from './tabber/index.vue'

// 获取用户的仓库
import useUserStore from "@/store/modules/user.ts";

let userStore = useUserStore();
let route = useRoute();


</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100vh;
  background-color: #141517;
  color: white;

  .layout-slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: #1a1b1e;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu-self {
        border-right: 1px solid #141517;
      }

    }

  }

  .layout-topper {
    width: calc(100% - $base-menu-width);
    height: $base-topper-height;
    background-color: #1a1b1e;
    position: fixed;
    top: 0;
    left: $base-menu-width;
  }

  .layout-main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-topper-height);
    //background-color: #CB34DB;
    left: $base-menu-width;
    top: $base-topper-height;
    padding: 20px;
    overflow: auto;
  }

}
</style>