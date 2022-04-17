import { defineStore } from "pinia";
import { accountLoginRequest } from "@/services/login/login";
import { IAccount, IBreadCrumb } from "./type/login";
import { localUtil } from "@/utils/localUtil";

export const useStore = defineStore("loginStore", {
  state: () => ({
    id: 0,
    username: localUtil.setLocal("username") ?? "",
    token: localUtil.setLocal("token") ?? "",
    breadCrumb: localUtil.setLocal("breadCrumb") ?? "",
  }),
  getters: {},
  actions: {
    async getLoginData(payload: IAccount) {
      const { data: res } = await accountLoginRequest(payload);

      this.$state.username = res.username;
      this.$state.token = res.token;

      localUtil.saveLocal("token", res.token);
      localUtil.saveLocal("username", res.username);
    },
    saveBreadCrumb(data: any) {
      this.$state.breadCrumb = data;
      localUtil.saveLocal("bereadCrumb", data);
    },
  },
});
