import { Routes } from "./routers/Routes";
// import { AuthContext, AuthProvider, TAuthConfig } from "react-oauth2-code-pkce";
import { AuthProvider, AuthService } from "react-oauth2-pkce";
import configuration from "./configuration.json";

/* const authConfig: TAuthConfig = {
  clientId: 'ssb_monitoring_frontend_test_pre',
  authorizationEndpoint: 'https://pre-identity.santillanaconnect.com/connect/authorize',
  tokenEndpoint: 'https://pre-identity.santillanaconnect.com/connect/token',
  // Whereever your application is running. Must match configuration on authorization server
  redirectUri: 'https://localhost:3000',
  // Optional
  // scope: 'openid profile email external.info apiSsb/full_access',
  scope: 'openid email external.info apiSsb/full_access',
  // Optional
  logoutEndpoint: 'https://pre-identity.santillanaconnect.com/connect/endsession',
  // Optional
  logoutRedirect: 'https://localhost:3000',
  // Example to redirect back to original path after login has completed
  preLogin: () => localStorage.setItem('preLoginPath', window.location.pathname),
  postLogin: () => window.location.replace(localStorage.getItem('preLoginPath') || ''),
  // Wether or not to try and decode the access token. 
  // Stops errors from being printed in the console for non-JWT access tokens, etc. from Github
  decodeToken: true
}

const logoutSession = async (id_token_hint: string, logOut: Function) => {
  let url = `https://pre-identity.santillanaconnect.com/connect/endsession?id_token_hint=${id_token_hint}&post_logout_redirect_uri=${'https://localhost:3000'}`;
  // const data= await axios.get(url);
  // console.log("data signIn == ", data);
  window.location.replace(url);
  logOut();
};

function LoginInfo() {
  const { tokenData, token, idToken, logOut, error } = useContext(AuthContext)

  return (
    <>
      {token ?
        <>
          <div>
            <h4>Access Token (JWT)</h4>
            <pre>{token}</pre>
          </div>
          <div>
            <h4>Login Information from Access Token (Base64 decoded JWT)</h4>
            <pre>{JSON.stringify(tokenData, null, 2)}</pre>
            <button onClick={() => {
              logoutSession(token, logOut);
            }}>Logout</button>
          </div>
        </> :
        <div>
          You are not logged in
          <button onClick={() => window.location.reload()}>Login</button>
        </div>
      }
    </>
  )

}

const App = () => (
  <AuthProvider authConfig={authConfig}>
    <LoginInfo/>
  </AuthProvider>
);

export default App; */

const authService = new AuthService({
  clientId: configuration.connect.clientId,
  authorizeEndpoint: configuration.connect.authorizeEndpoint,
  tokenEndpoint: configuration.connect.tokenEndpoint,
  logoutEndpoint: configuration.connect.logoutEndpoint,
  location: window.location,
  provider: configuration.connect.provider,
  redirectUri: configuration.connect.redirectUri,
  scopes: configuration.connect.scopes
});

const App = () => {
  return (
    <AuthProvider authService={authService} >
      <Routes />
    </AuthProvider>
  )
}

export default App

