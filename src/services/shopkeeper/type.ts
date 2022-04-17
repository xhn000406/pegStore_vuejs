export interface Ishopkeeper {
  id: number;
  username: string;
  password: string;
  createTime: Date;
  updateTime: Date;
  fans: number;
  shop: string;
  shopper: number;
}

export interface IshopkeeperData {
  data: Ishopkeeper[];
  code: number;
  msg: string;
}
