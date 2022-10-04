import { AuthService } from "react-oauth2-pkce";
import configuration from "../../configuration.json";

export const authService = new AuthService({
  clientId: configuration.connect.clientId,
  authorizeEndpoint: configuration.connect.authorizeEndpoint,
  tokenEndpoint: configuration.connect.tokenEndpoint,
  logoutEndpoint: configuration.connect.logoutEndpoint,
  location: window.location,
  provider: configuration.connect.provider,
  redirectUri: configuration.connect.redirectUri,
  scopes: configuration.connect.scopes,
  autoRefresh: true
});
