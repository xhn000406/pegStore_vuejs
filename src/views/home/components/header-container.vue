<template>
  <div class="header-container">
    <HnBreadcrumb :bread-crumb="breadCrumb"></HnBreadcrumb>
    <HeaderUserinfo></HeaderUserinfo>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, watch } from "vue";
import { localUtil } from "@/utils/localUtil";

import HnBreadcrumb from "@/base-ui/hn-breadcrumb/src/hn-breadcrumb.vue";
import HeaderUserinfo from "./header-userinfo.vue";

import { useRouter, useRoute } from "vue-router";
import { useStore } from "@/stores/login";

const MenuData: any = inject("menuData");
const store = useStore();
const router = useRouter();
const route = useRoute();

const breadCrumb = ref(
  localUtil.setLocal("bereadCrumb") ?? [
    { name: "宠物商城", url: "" },
    { name: "欢迎光临", url: "" },
  ]
);
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
      store.saveBreadCrumb(breadCrumb.value);
    });
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
