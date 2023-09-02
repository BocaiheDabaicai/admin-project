<template>
<div class="tabber">
  <div class="tabber-left">
    <Breadcrumb></Breadcrumb>
  </div>
  <div class="tabber-right">
    <Setting></Setting>
  </div>
</div>
</template>

<script setup lang="ts" name="Tabber">
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'

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

  }
  .tabber-right{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
}
</style>