import { useContext } from "react";
import { Routes } from "./routers/Routes";
// import { AuthProvider } from "oidc-react";
// import LoggedIn from './LoggedIn';
// import { Authenticate } from "react-oidc-client";
// import { AuthContext, AuthProvider, TAuthConfig } from "react-oauth2-code-pkce";
import { AuthProvider, AuthService, useAuth  } from "react-oauth2-pkce";

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

/* const oidcConfig = {
  onSignIn: async (user: any) => {
    alert('You just signed in, congratz! Check out the console!');
    console.log(user);
    window.location.hash = '';
  },
  authority: 'https://pre-identity.santillanaconnect.co',
  clientId: 'ssb_monitoring_frontend_test_pre',
  responseType: 'code',
  redirectUri:'https://localhost:3000/',
  scope: 'openid email external.info apiSsb/full_access',
};

// oidc-react
function App() {
  return (
    <AuthProvider {...oidcConfig}>
      <div className="App">
        <header className="App-header">
          <p>OIDC React</p>
          <LoggedIn />
        </header>
      </div>
    </AuthProvider>
  );
}

export default App; */


/* const MySecretContent: React.FC = () => <div>My secure content</div>;
const LoadingComponent: React.FC = () => <div>My loader</div>

// react-oidc-client
const App = () => {
  return (
    <Authenticate
      LoadingComponent={LoadingComponent}
      loginCompletePath="/"
      logoutPath="/"
      userManagerSettings={{
        loadUserInfo: true,
        // userStore: new WebStorageStateStore({
       //   store: localStorage
       // }),
        authority: "https://pre-identity.santillanaconnect.co",
        client_id: "ssb_monitoring_frontend_test_pre",
        redirect_uri: "https://localhost:3000",
        response_type: "code",
        scope: "openid profile email external.info apiSsb/full_access", // add other scopes here
        post_logout_redirect_uri: "https://localhost:3000"
      }}
    >
      <MySecretContent />
    </Authenticate>
  );
}

export default App; */

const Home = () => {
  const { authService } = useAuth();
  const token = authService.getAuthTokens();

  const login = async () => {
    authService.authorize()
  }
  const logout = async () => {
    authService.logout(true);
  }

  if (authService.isPending()) {
    return <div>Loading...</div>
  }

  if (!authService.isAuthenticated()) {
    return (
      <div>
        <p>Not Logged in yet: {JSON.stringify(token)} </p>
        <button onClick={login}>Login</button>
      </div>
    )
  }

  return (
    <div>
      <p>Logged in! {JSON.stringify(token)}</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

const authService = new AuthService({
  clientId: 'ssb_monitoring_frontend_test_pre',
  authorizeEndpoint: 'https://pre-identity.santillanaconnect.com/connect/authorize',
  tokenEndpoint: 'https://pre-identity.santillanaconnect.com/connect/token',
  logoutEndpoint: 'https://pre-identity.santillanaconnect.com/connect/endsession',
  location: window.location,
  provider: 'https://pre-identity.santillanaconnect.com',
  redirectUri: 'https://localhost:3000',
  scopes: ['openid', 'email', 'external.info', 'apiSsb/full_access']
});

const App = () => {
  return (
    <AuthProvider authService={authService} >
      <Home />
    </AuthProvider>
  )
}

export default App

