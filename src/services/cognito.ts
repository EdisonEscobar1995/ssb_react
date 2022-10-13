import axios from "axios"
import { Cognito } from "../interfaces/Cognito";
import { CognitoMapper } from "../mappers/CognitoMapper";
import { verifyTokenCognito } from "../utils/cognito";

const { REACT_APP_URL_BASE_COGNITO } = process.env;

export class CognitoService {

  public static getTestCognito = async (scope: string, tokenCognito: string) => {
    const tokenValidCognito = await verifyTokenCognito(tokenCognito);
    try {
      const url = `${REACT_APP_URL_BASE_COGNITO}/oauth2/test?scope=${scope}`;
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${tokenValidCognito}`,
          Accept: "application/json;odata=verbose"
        },
      });
      console.log('data == ', data);
      const cognitoData: Cognito = CognitoMapper.mapperInfoCognito(data);
      return cognitoData;
    } catch(error: any) {
      const cognitoData: Cognito = CognitoMapper.mapperInfoCognito(error?.response?.data);
      return cognitoData;
    }
  }
}