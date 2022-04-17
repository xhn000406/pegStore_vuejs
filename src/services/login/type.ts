export interface IAccount {
  username: string;
  password: string;
}

export interface IloginResult {
  data: {
    id: number;
    username: string;
    token: string;
  };
}
