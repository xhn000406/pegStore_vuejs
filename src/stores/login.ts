import { defineStore } from "pinia";
import { accountLoginRequest } from "@/services/login/login";
import { IAccount } from "./type/login";
import { localUtil } from "@/utils/localUtil";

export const useStore = defineStore("loginStore", {
  state: () => ({
    id: 0,
    name: "",
    token: localUtil.setLocal("token") ?? "",
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
    },
  },
});
