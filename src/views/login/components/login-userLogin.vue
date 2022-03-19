<template>
  <div class="userLogin">
    <el-form :model="fromData" :rules="loginRules" ref="form">
      <el-form-item label="账号" prop="name" hide-required-asterisk>
        <el-input v-model="fromData.name" :suffix-icon="Edit"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" hide-required-asterisk>
        <el-input v-model="fromData.password" show-password></el-input>
      </el-form-item>
    </el-form>
    <div class="asscount-login">
      <el-button type="primary" @click="loginBtn()">点击登陆</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
// 验证规则
import { loginRules } from "./ruleOptions/index";
import { IformData, FormInstance, Edit } from "../type/index";
//使用商店
import { useStore } from "@/stores/login";
//创建路由实例
import { useRouter } from "vue-router";

const fromData: IformData = reactive({
  name: "",
  password: "",
});

const form = ref<FormInstance>();
const store = useStore();
const router = useRouter();

const loginBtn = () => {
  form.value?.validate((vaile: boolean) => {
    if (vaile == true) {
      store.getLoginData(fromData);
      router.push("/home");
    }
  });
};
</script>

<style scoped lang="less">
.userLogin {
  el-form-item {
    margin-bottom: 20px;
  }
  .btnHandle {
    display: flex;
    justify-content: center;
  }
  .asscount-login {
    margin: 0px auto;
    margin-top: 22px;
    width: 250px;
    height: 28px;

    .el-button {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
