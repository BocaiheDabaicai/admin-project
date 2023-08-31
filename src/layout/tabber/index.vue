<template>
<div class="tabber">
  <div class="tabber-left">
    <el-icon class="tabber-left-icon">
      <Expand />
    </el-icon>
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item >
        <template #default>
          <span class="bread-color">权限管理</span>
        </template>
      </el-breadcrumb-item>
      <el-breadcrumb-item >
        <template #default>
          <span class="bread-color">角色管理</span>
        </template>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="tabber-right">
    <el-button icon="Refresh" color="#111" circle></el-button>
    <el-button icon="FullScreen" color="#111" circle></el-button>
    <el-button icon="Setting" color="#111" circle></el-button>
    <el-avatar :size="24" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
    <el-dropdown>
    <span class="el-dropdown-link">
      Dropdown List
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item divided>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</div>
</template>

<script setup lang="ts">


</script>

<style scoped lang="scss">

.tabber{
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: row;
  justify-content:space-between ;
  .tabber-left{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .tabber-left-icon{
      margin: 0 10px;
    }
    .bread-color{
      color: white;
    }

  }
  .tabber-right{
    display: flex;
    align-items: center;
  }
}
</style>