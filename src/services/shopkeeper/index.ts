import XuRequest from "../index";
import { IshopkeeperData } from "./type";

enum shopkeeperApi {
  shopkeeper = "system/getshopkeeper",
}

export function getshopkeeperRequest() {
  return XuRequest.get<IshopkeeperData>({
    url: shopkeeperApi.shopkeeper,
  });
}
