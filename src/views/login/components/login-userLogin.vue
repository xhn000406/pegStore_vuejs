<template>
  <div class="userLogin">
    <el-form :model="fromData" :rules="loginRules" ref="form">
      <el-form-item label="账号" prop="name" hide-required-asterisk>
        <el-input v-model="fromData.name" :suffix-icon="Edit"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passworld" hide-required-asterisk>
        <el-input v-model="fromData.passworld"></el-input>
      </el-form-item>
    </el-form>
    <div class="asscount-login">
      <el-button type="primary" @click="loginBtn()">点击登陆</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
// 验证规则
import { loginRules } from "./ruleOptions/index";
import { IformData, FormInstance, Edit } from "../type/index";
//使用商店
import { useStore } from "@/stores/login";

const fromData: IformData = reactive({
  passworld: "",
  name: "",
});

const form = ref<FormInstance>();
const store = useStore();
console.log(store.$state.name);

const loginBtn = () => {
  form.value?.validate((vaile: boolean) => {
    if (vaile == false) {
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
