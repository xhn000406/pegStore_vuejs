<template>
  <div class="hn-table">
    <div class="banner">
      <div>
        <h2>{{ title }}</h2>
      </div>
      <div class="slot_handle">
        <slot name="search"></slot>
        <slot name="create"></slot>
      </div>
    </div>
    <el-table
      :data="tableData.result"
      stripe
      style="width: 100%"
      @selection-change="handleSelectionChange"
      @current-chang="handleCurrentChange"
    >
      <el-table-column type="selection" width="60" />
      <template v-for="item in tableProp">
        <el-table-column align="center" :="item" :width="item.width">
          <template #default="scope">
            <slot :name="item.slotname" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { Ishopkeeper } from "@/services/shopkeeper/type";
import { computed } from "@vue/reactivity";
import { PropType, ref } from "vue";

const prop = defineProps({
  title: { type: String, require: true },
  tableData: { type: Object as PropType<Ishopkeeper>, require: true },
});

console.log(prop.tableData?.result);

const handleSelectionChange = () => {
  console.log(123);
};

const handleCurrentChange = () => {
  console.log(123);
};

const tableProp = [
  {
    prop: "username",
    label: "账号",
    width: "100",
  },

  {
    prop: "fans",
    label: "粉丝",
    slotname: "fans",
  },
  {
    prop: "shop",
    label: "店铺名字",
    width: "120",
  },
  {
    prop: "shopper",
    label: "总收入",
    slotname: "shopper",
  },
  {
    prop: "createTime",
    label: "创造时间",
    slotname: "createAt",
  },
  {
    prop: "updateTime",
    label: "修改时间",
    slotname: "updateAt",
  },
  {
    label: "操作",
    slotname: "handle",
  },
];
</script>

<style scoped lang="less">
.hn-table {
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
.slot_handle {
  display: flex;
}
</style>
