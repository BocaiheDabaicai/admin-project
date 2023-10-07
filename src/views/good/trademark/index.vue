<template>
  <el-card class="box-card">
    <el-button icon="plus">添加品牌</el-button>
    <el-table style="margin: 10px 0;" border :data="trademarkArray">
      <el-table-column label="Index" width="80px" align="center" type="index"></el-table-column>
      <el-table-column label="Brand Name" align="center" prop="tmName"></el-table-column>
      <el-table-column label="Brand Logo" align="center">
        <template #default="{row,$index}">
          <el-image :src="row.logoUrl" alt="没有图片捏"></el-image>
        </template>
      </el-table-column>
      <el-table-column label="Brand Options" align="center">
        <el-button type="warning">修改</el-button>
        <el-button type="danger">删除</el-button>
      </el-table-column>
    </el-table>
    <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[3,5,7,9]"
        layout="prev, pager, next, jumper, ->, sizes, total"
        :total="total"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </el-card>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import {reqHasTrademark} from "@/api/product/trademark";

const currentPage = ref(1)
const pageSize = ref(1)

let pageNo = ref<number>(1);
let limit = ref<number>(5);
let total = ref<number>(0);
let trademarkArray = ref<any>([]);
const getHasTrademark = async () => {
  let result = await reqHasTrademark(pageNo.value, limit.value)
  console.log(result)
  if(result.code === 200){
    total.value = result.data.total
    trademarkArray.value = result.data.records
  }
}

onMounted(()=>{
  getHasTrademark()
})

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style scoped lang="scss">
.box-card {
  background-color: #1a1b1e;
  border-color: #1a1b1e;
}
</style>