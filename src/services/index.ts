import HYRequest from "./request";
import { localUtil } from "@/utils/localUtil";

const hyRequest = new HYRequest({
  baseURL: "http://localhost:9090/",
  timeout: 1000,

  interceptors: {
    requestInterceptor: (config) => {
      //携带token拦截
      const token = localUtil.setLocal("token") ?? "";
      if (token) {
        const configs = config.headers as any;
        configs.Authorization = `${token}`;
        configs.headers["Content-Type"] = "application/json;charset=utf-8";
        config.data = JSON.stringify(config.data);
      }
      console.log("请求芥蓝");

      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res;
    },
    rrequestInterceptorCatch: (err) => {
      return err;
    },
  },
});

export default hyRequest;
