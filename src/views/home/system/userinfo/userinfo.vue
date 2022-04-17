<template>
  <div>
    <HnTable title="店长信息" :table-data="tableData" ref="hnTableRef">
      <template #shopper="scope">{{ scope.row.shopper }} $ </template>
      <template #fans="scope"> {{ scope.row.fans }} 人 </template>
      <template #createAt="scope">
        {{ transformStamp(scope.row.createTime) }}
      </template>
      <template #updateAt="scope">
        {{ transformStamp(scope.row.updateTime) }}
      </template>
      <template #handle="scope">
        <el-button type="primary" @click="handleExitClick(scope.row)"
          >编辑</el-button
        >
        <el-button type="primary" @click="handleDeletClick(scope.row)"
          >删除</el-button
        >
      </template>
    </HnTable>
  </div>
</template>

<script setup lang="ts">
import HnTable from "@/base-ui/hn-table/src/hn-table.vue";
import { Ishopkeeper } from "@/services/shopkeeper/type";

import { useStore } from "@/stores/shopkeeper";
import { transformStamp } from "@/utils/data-format";

import { onMounted, ref, computed } from "vue";

const store = useStore();
store.getUserData();
const tableData = computed(() => store.shopkeeper);
const handleExitClick = (rowData: any) => {
  console.log(rowData);
};
const handleDeletClick = (rowData: Ishopkeeper) => {
  console.log(rowData.id);
};
</script>

<style scoped></style>
