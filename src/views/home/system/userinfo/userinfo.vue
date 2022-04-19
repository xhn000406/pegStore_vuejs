<template>
  <div>
    <HnTable title="店长信息" :table-data="tableData" ref="hnTableRef">
      <template #search>
        <div class="search">
          <div class="search_button">
            <el-button type="primary" :icon="Search" @click="btnSearch"
              >搜索</el-button
            >
          </div>
          <div class="search_input">
            <el-input placeholder="输入名字~" v-model="searchInput" />
          </div>
        </div>
      </template>
      <template #shopper="scope"
        >{{ scope.row.shopper ? `${scope.row.shopper} $` : "" }}
      </template>
      <template #fans="scope">
        {{ scope.row.fans ? `${scope.row.fans} 人` : "" }}
      </template>
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
import { computed, reactive, ref } from "vue";
import { IshopkeeperResult } from "@/services/shopkeeper/type";
import { useStore } from "@/stores/shopkeeper";
import { transformStamp } from "@/utils/data-format";
import { Search } from "@element-plus/icons-vue";
import HnTable from "@/base-ui/hn-table/src/hn-table.vue";

//input
const searchInput = ref("");

// store
const store = useStore();
store.getShopkeeperData();
const tableData = computed(() => store.shopkeeper);
//handle
const handleExitClick = (rowData: any) => {
  console.log(rowData);
};
const handleDeletClick = (rowData: IshopkeeperResult) => {
  store.delteShopkeeperData(rowData.id);
};
const btnSearch = () => {
  store.searchShopkeeperData(searchInput.value);
};
</script>

<style scoped>
.search {
  width: 300rpx;
  display: flex;
}
.search_input {
  width: 150px;
}
.search_button {
  padding-right: 15px;
}
</style>
