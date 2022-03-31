<template>
  <div class="header-container">
    <HnBreadcrumb :bread-crumb="breadCrumb"></HnBreadcrumb>
    <HeaderUserinfo></HeaderUserinfo>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, watch } from "vue";
import HnBreadcrumb from "@/base-ui/hn-breadcrumb/src/hn-breadcrumb.vue";
import { useRouter } from "vue-router";
import HeaderUserinfo from "./header-userinfo.vue";

const MenuData: any = inject("menuData");

const router = useRouter();

const breadCrumb = ref([
  { name: "个人状况", url: "" },
  { name: "个人信息", url: "/system/user" },
]);
watch(
  () => router.currentRoute.value,
  (toPath: any) => {
    MenuData.find((item: string[]) => {
      item.children.find((aitem: string[]) => {
        if (`/${aitem.url}` === toPath.path) {
          breadCrumb.value[0].name = item.title;
          breadCrumb.value[1].name = aitem!.title;
          breadCrumb.value[1].url = toPath.path;
        }
      });
    });

    // if (`/${item.children[0].url}` === toPath.path) {
    //   breadCrumb.value[0].name = item.children[0].title;
    // };
  }
);
</script>

<style scoped lang="less">
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
</style>
