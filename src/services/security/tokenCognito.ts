import axios from "axios";
import configuration from "../../configuration.json"

export class TokenCognitoService {
  public static getTokenCognito = async () => {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    const { data } = await axios.post(
      configuration.cognito.tokenEndpoint,
      params,
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        auth: {
          username: configuration.cognito.clientId,
          password: configuration.cognito.clientSecret
        },
      }
    );
    return data;
  };
}
