<template>
  <div>
    <HnTable
      title="店长信息"
      :table-data="tableData"
      :table-prop="tableProp"
      ref="hnTableRef"
    >
      <template #shopName="scope">
        {{ scope.row.id }}
      </template>

      <template #search>
        <div class="search">
          <div class="search_button">
            <el-button type="primary" :icon="Search" @click="btnSearch"
              >搜索</el-button
            >
          </div>
          <div class="search_input">
            <el-input
              placeholder="输入名字~"
              v-model="searchInput"
              @keyup.enter.native="btnSearch"
            />
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
        <el-button
          type="primary"
          :icon="Edit"
          @click="handleExitClick(scope.row)"
          >编辑</el-button
        >
        <el-button
          type="primary"
          :icon="Delete"
          @click="handleDeletClick(scope.row)"
          >删除</el-button
        >
      </template>
      <template #bottom_handle>
        <el-pagination
          v-model:currentPage="pageData.currentPage"
          v-model:page-size="pageData.pageSize"
          layout="total,  prev, pager, next"
          :total="+tableData.count"
          @current-change="handleCurrentChange"
        />
      </template>
    </HnTable>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { IshopkeeperResult } from "@/services/shopkeeper/type";
import { useStore } from "@/stores/shopkeeper";
import { transformStamp } from "@/utils/data-format";
import { Search, Edit, Delete } from "@element-plus/icons-vue";
import HnTable from "@/base-ui/hn-table/src/hn-table.vue";
import { tableProp } from "./config/tableProp";

//ref
const hnTableRef = ref();
const searchInput = ref("");
const isShopName = ref(false);

// store
const store = useStore();
store.getShopkeeperData();

const tableData: any = computed(() => {
  return store.shopkeeper;
});

//handle
const handleExitClick = (rowData: any) => {
  isShopName.value = !isShopName.value;
  console.log(rowData.id);
};
const handleDeletClick = (rowData: IshopkeeperResult) => {
  store.delteShopkeeperData(rowData.id);
};
const btnSearch = () => {
  store.searchShopkeeperData(searchInput.value);
};

//page

const pageData = ref({
  pageSize: 10,
  currentPage: 1,
});

const handleCurrentChange = () => {
  store.getShopkeeperData(pageData.value);
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
