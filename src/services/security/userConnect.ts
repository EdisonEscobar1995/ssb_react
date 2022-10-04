import axios from "axios";
import configuration from "../../configuration.json"
import { UserInfo, UserRol } from "../../interfaces/UserConnect";
import { UserInfoMapper } from "../../mappers/UserInfoMapper";

const { REACT_APP_URL_BASE } = process.env;

export class UserService {
  public static getUserInfo = async (token: string) => {
    const { data } = await axios.get(configuration.connect.infoUserEndpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json;odata=verbose"
      },
    });
    console.log('dataUserInfo == ', data);
    const userInfo: UserInfo = UserInfoMapper.mapperInfo(data);
    if (userInfo) {
      // const dataRoles = await this.getUserRoles(token, userInfo.userName);
      // userInfo.roles = dataRoles || [];
      userInfo.roles = [{
        key: 'visualizer',
        name: 'visualizer',
        role: 'visualizer'
      }];
    }
    return userInfo;
  };

  public static getUserRoles = async (token: string, userKey: string) => {
    const url = `${REACT_APP_URL_BASE}/v0.1/monitoring/userrole?userKey=${userKey}`;
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json;odata=verbose",
      },
    });
    console.log(data);
    const userRols: UserRol[] = UserInfoMapper.mapperUserRoles(data);
    return userRols;
  };
}
