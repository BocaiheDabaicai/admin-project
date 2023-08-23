<template>
  <div class="layout-container">
    <div class="layout-slider">左侧</div>
    <div class="layout-topper">顶部</div>
    <div class="layout-main">
      <p style="height: 10000px;background-color: #F5883B">内容</p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.layout-container{
  width:100%;
  height:100vh;
  //background-color: #3ba8f5;

  .layout-slider{
    width:$base-menu-width;
    height:100vh;
    background-color: #F5883B;
  }

  .layout-topper{
    width:calc(100% - $base-menu-width);
    height:$base-topper-height;
    background-color: #45DB34;
    position: fixed;
    top:0;
    left:$base-menu-width;
  }

  .layout-main{
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-topper-height);
    background-color: #CB34DB;
    left:$base-menu-width;
    top:$base-topper-height;
    padding: 20px;
    overflow: auto;
  }

}
</style>