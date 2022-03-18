<template>
  <div class="login">
    <LoginContainer></LoginContainer>
  </div>
</template>

<script setup lang="ts">
import LoginContainer from "./components/login-container.vue";
</script>

<style scoped>
.login {
  height: 100%;
  width: 100%;
  background-image: url("@/assets/img/background.jpeg");
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
