import { defineStore } from "pinia";
import { getshopkeeperRequest } from "@/services/shopkeeper";

import { Ishopkeeper } from "@/services/shopkeeper/type";

export const useStore = defineStore("shopkeeperStore", {
  state: () => ({
    shopkeeper: [] as Array<Ishopkeeper>,
  }),
  actions: {
    async getUserData() {
      const { data } = await getshopkeeperRequest();
      console.log(data);

      this.$state.shopkeeper = data;
    },
  },
});
