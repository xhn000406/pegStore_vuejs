<template>
  <div id="hnMenu">
    <div class="title">宠物商店</div>
    <!-- 🔛 -->
    <el-menu default-active="1" class="el-menu-vertical-demo">
      <template v-for="item in MenuData" :key="item.id">
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <span>{{ item.title }}</span>
          </template>
          <template v-for="Menu in item.children" :key="Menu.id">
            <el-menu-item :index="Menu.id + ''">
              <span @click="BtnRouter(Menu.url)">{{ Menu.title }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { defineProps } from "vue";

defineProps({
  MenuData: {
    type: Object,
    require: true,
  },
});

const router = useRouter();
const BtnRouter = (url: any) => {
  router.push(`/${url}`);
};
</script>

<style scoped>
.title {
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
}
</style>
