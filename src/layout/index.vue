<template>
  <div class="layout-container">
    <div class="layout-slider">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#1a1b1e"
            text-color="white"
            active-text-color="#3ba7f3"
            :collapse="false"
        >
          <el-menu-item index="1">
            <el-icon>1</el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon>2</el-icon>
            <span>数据大屏</span>
          </el-menu-item>
          <el-sub-menu index="1">
            <template #title>
              <el-icon>3</el-icon>
              <span>Navigator One</span>
            </template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
              <el-menu-item index="1-3">item three</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout-topper">顶部</div>
    <div class="layout-main">
      <el-scrollbar>
        <p style="height: 10000px;background-color: #1a1b1e">内容</p>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'


</script>

<style scoped lang="scss">
.layout-container{
  width:100%;
  height:100vh;
  background-color: #141517;
  color:white;

  .layout-slider{
    width:$base-menu-width;
    height:100vh;
    background-color: #1a1b1e;

    .scrollbar{
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
    }

  }

  .layout-topper{
    width:calc(100% - $base-menu-width);
    height:$base-topper-height;
    background-color: #1a1b1e;
    position: fixed;
    top:0;
    left:$base-menu-width;
  }

  .layout-main{
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-topper-height);
    //background-color: #CB34DB;
    left:$base-menu-width;
    top:$base-topper-height;
    padding: 20px;
    overflow: auto;
  }

}
</style>