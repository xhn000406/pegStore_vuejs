<template>
  <div id="header-userinfo">
    <el-dropdown :hide-on-click="false">
      <span class="el-dropdown-link">
        <el-icon style="padding-right: 4px"><user></user></el-icon>
        {{ store.$state.username
        }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>聊天窗口</el-dropdown-item>
          <el-divider />
          <el-dropdown-item @click="exitLogin">退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ArrowDown, User } from "@element-plus/icons-vue";
import { useStore } from "@/stores/login";
import { localUtil } from "@/utils/localUtil";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

const exitLogin = () => {
  router.push("/login");
  localUtil.clearLocal();
};
</script>

<style scoped lang="less">
#header-userinfo {
  padding-right: 14px;
}
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
