import { defineStore } from "pinia";
import { accountLoginRequest } from "@/services/login/login";
import { IAccount } from "./type/login";
import { localUtil } from "@/utils/localUtil";
import { useLocalStorage } from "@vueuse/core";

export const useStore = defineStore("loginStore", {
  state: () => ({
    id: 0,
    name: localUtil.setLocal("name"),
    token: localUtil.setLocal("token"),
    n: useLocalStorage("key", 0),
  }),
  getters: {
    demo({ ...payload }) {
      console.log(payload);
    },
  },
  actions: {
    async getLoginData(payload: IAccount) {
      const { id, name, token } = await accountLoginRequest(payload);
      this.$state.name = name;
      this.$state.id = id;
      this.$state.token = token;

      localUtil.saveLocal("token", token);
      localUtil.saveLocal("name", name);
    },
  },
});
