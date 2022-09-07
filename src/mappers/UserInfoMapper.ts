import { UserInfo, UserRol } from "../interfaces/UserConnect";

export class UserInfoMapper {
  public static mapperInfo(data: any): UserInfo {
    let option: UserInfo = null;
    if (data) {
      option = {
        sub: data.sub || '',
        userName: data.preferred_username || '',
        email: data.email || '',
        emailVerified: data.email_verified || '',
      };
    }
    return option;
  }

  public static mapperUserRol(data: any): UserRol {
    let option: UserRol = null;
    if (data) {
      option = {
        key: data.key || '',
        name: data.name || '',
        role: data.role || '',
      };
    }
    return option;
  }

  public static mapperUserInfo(data: any): UserInfo {
    return data.map((item: any) => {
      return this.mapperInfo(item);
    });
  }

  public static mapperUserRoles(data: any): UserRol[] {
    return data.map((item: any) => {
      return this.mapperUserRol(item);
    });
  }

}
