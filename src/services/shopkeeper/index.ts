import XuRequest from "../index";
import { IshopkeeperData } from "./type";

enum shopkeeperApi {
  getshopkeeper = "system/getshopkeeper",
  deleteshopkeeper = "system/getshopkeeper",
}

export function getshopkeeperRequest(params?: object) {
  return XuRequest.get<IshopkeeperData>({
    url: shopkeeperApi.getshopkeeper,
    params: params,
  });
}

export function deleteShopkeeperRequest(id: number) {
  return XuRequest.delete({
    url: shopkeeperApi.deleteshopkeeper + `/${id}`,
  });
}

export function searchShopkeeperRequest(data: Object) {
  return XuRequest.post<IshopkeeperData>({
    url: shopkeeperApi.getshopkeeper,
    data: data,
  });
}
