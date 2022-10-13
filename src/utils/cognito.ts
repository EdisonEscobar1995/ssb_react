import jwt_decode from "jwt-decode";
import { TokenCognitoService } from "../services/security/tokenCognito";
import { isValidToken } from "./auth";

export const getTokenCognito = async () => {
  const tokenCognito = await TokenCognitoService.getTokenCognito();
  return tokenCognito?.access_token || '';
};

export const getFirstTokenCognito = async (setLoading: Function, setTokenCognito: Function) => {
  try {
    setLoading(true);
    const tokenCognitoAux = await getTokenCognito();
    console.log('tokenCognitoAux == ', tokenCognitoAux);
    setTokenCognito(tokenCognitoAux);
    setLoading(false);
  } catch (error) {
    console.error('Error en getFirstTokenCognito = ', error);
    setLoading(false);
  }
};

export const verifyTokenCognito = async (token: string) => {
  const decodeToken: any = jwt_decode(token);
  let tokenResponse = token;
  if (!isValidToken(decodeToken?.exp)) {
    tokenResponse = await getTokenCognito();
  }
  return tokenResponse;
};
