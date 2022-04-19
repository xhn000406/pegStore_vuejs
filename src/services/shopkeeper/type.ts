export interface IshopkeeperResult {
  id: number;
  username: string;
  password: string;
  createTime: Date;
  updateTime: Date;
  fans: number;
  shop: string;
  shopper: number;
}

export interface Ishopkeeper {
  count: number;
  result: IshopkeeperResult[];
}

export interface IshopkeeperData {
  data: Ishopkeeper[];
  code: number;
  msg: string;
}
