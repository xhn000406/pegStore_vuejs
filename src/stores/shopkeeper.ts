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
    async getShopkeeperData(params?: igetShopkeeperParams) {
      const { data } = await getshopkeeperRequest(params);
      this.$state.shopkeeper = data;
    },
    async delteShopkeeperData(id: number) {
      const result = await deleteShopkeeperRequest(id);
      if (result) {
        return await this.getShopkeeperData();
      }
    },
    async searchShopkeeperData(e: string) {
      const req = { username: e };

      const { data } = await searchShopkeeperRequest(req);
      console.log(data);

      this.$state.shopkeeper = data;
    },
  },
});
