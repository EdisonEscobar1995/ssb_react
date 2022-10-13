import { Cognito } from "../interfaces/Cognito";

export class CognitoMapper {
  public static mapperCognito(data: any): Cognito {
    let option: Cognito = null;
    if (data) {
      option = {
        statusCode: data.statusCode,
        timestamp: data.timestamp,
        epochtime: data.epochtime,
        path: data.path,
        scope: data.scope,
        message: data.message
      };
    }
    return option;
  }

  public static mapperInfoCognito(data: any): Cognito {
    return this.mapperCognito(data);
  }

}
