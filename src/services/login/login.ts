import XuRequest from "../index";
import { IAccount, IloginResult } from "./type";

enum LoginApi {
  AccountLogin = "auth/login",
}

export function accountLoginRequest(account: IAccount) {
  return XuRequest.post<IloginResult>({
    url: LoginApi.AccountLogin,
    data: account,
  });
}
