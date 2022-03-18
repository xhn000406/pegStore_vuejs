<template>
  <div id="container">
    <h2 class="title">移动网盘</h2>
    <el-tabs type="border-card" stretch="true">
      <el-tab-pane label="用户登陆">
        <LoginUserLogin></LoginUserLogin>
      </el-tab-pane>
      <el-tab-pane label="用户注册">
        <LoginUserRegister></LoginUserRegister>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import LoginUserLogin from "./login-userLogin.vue";
import LoginUserRegister from "./login-userRegister.vue";
</script>

<style scoped lang="less">
#container {
  .title {
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    color: pink;
  }

  width: 300px;
  height: 500px;
}
</style>
