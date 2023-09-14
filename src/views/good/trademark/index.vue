<template>
    <el-card class="box-card">
      <el-button icon="plus">添加品牌</el-button>
      <el-table style="margin: 10px 0;" border >
        <el-table-column label="Index" width="80px" align="center"></el-table-column>
        <el-table-column label="Brand Name" align="center"></el-table-column>
        <el-table-column label="Brand Logo" align="center"></el-table-column>
        <el-table-column label="Brand Options" align="center"></el-table-column>
      </el-table>
      <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[3,5,7,9]"
          layout="prev, pager, next, jumper, ->, sizes, total"
          :total="400"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </el-card>
</template>

<script setup lang="ts">
import {ref} from 'vue'


const currentPage4 = ref(4)
const pageSize4 = ref(3)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style scoped lang="scss">
.box-card{
  background-color: #1a1b1e;
  border-color: #1a1b1e;
}
</style>