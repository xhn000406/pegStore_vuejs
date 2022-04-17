<template>
  <div class="pegShop">
    <div class="banner">
      <div>
        <h2>{{ title }}</h2>
      </div>
      <div>
        <el-button type="primary">查询</el-button>
        <el-button type="primary">增加商品</el-button>
      </div>
    </div>
    <el-table
      :data="tableDataa"
      stripe
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <template v-for="item in tableData">
        <el-table-column align="center" :="item">
          <template #default="scope">
            {{ scope.row[item.prop] }}
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const prop = defineProps({
  title: { type: String, require: true },
});
const title = ref("爱你");

const handleSelectionChange = () => {
  console.log(123);
};

const tableData = [
  {
    prop: "username",
    label: "账号",
  },
  {
    prop: "password",
    label: "密码",
  },
  {
    prop: "sex",
    label: "性别",
  },
  {
    prop: "pinzhong",
    label: "品种",
  },
];

const tableDataa: any = [
  {
    username: "徐浩楠",
    password: "sadasd",
  },
  {
    password: "sadasd",
  },
];
</script>

<style scoped lang="less">
.pegShop {
  background-color: white;
  width: 100%;
  height: 100%;
}
.banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
