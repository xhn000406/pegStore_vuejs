import { defineStore } from "pinia";
import {
  deleteShopkeeperRequest,
  getshopkeeperRequest,
  searchShopkeeperRequest,
} from "@/services/shopkeeper";

import { Ishopkeeper } from "@/services/shopkeeper/type";

export const useStore = defineStore("shopkeeperStore", {
  state: () => ({
    shopkeeper: [] as Array<Ishopkeeper>,
  }),
  actions: {
    async getShopkeeperData() {
      const { data } = await getshopkeeperRequest();
      this.$state.shopkeeper = data;
    },
    async delteShopkeeperData(id: number) {
      const result = await deleteShopkeeperRequest(id);
      await this.getShopkeeperData();
      return result;
    },
    async searchShopkeeperData(e: string) {
      const req = { username: e };

      const { data: res } = await searchShopkeeperRequest(req);
      const result = res.result;

      this.$state.shopkeeper = result;
    },
  },
});
