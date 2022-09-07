import { UserInfo } from "./UserConnect";

export interface IAppContextProps {
  setIsLogin: Function;
  defaultMenu?: string;
  setDefaultMenu?: Function;
  userInfo?: UserInfo | any;
  tokenCognito?: string;
}
