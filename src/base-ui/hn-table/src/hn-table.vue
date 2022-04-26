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

    <div class="slot_bottom">
      <slot name="bottom_handle"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ishopkeeper } from "@/services/shopkeeper/type";
import { computed } from "@vue/reactivity";

import { PropType, ref, watch, nextTick } from "vue";

const prop = defineProps({
  title: { type: String, require: true },
  tableData: { type: Object as PropType<Ishopkeeper>, require: true },
  tableProp: { type: Array, require: true },
});

const handleSelectionChange = () => {
  console.log(123);
};

const handleCurrentChange = () => {
  console.log(123);
};
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
.slot_bottom {
  margin-top: 70px;
  margin-right: 70px;
  display: flex;
  justify-content: flex-end;
}
</style>
