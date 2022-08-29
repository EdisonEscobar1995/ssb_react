import { Login } from "../../components";
import { useAuth  } from "react-oauth2-pkce";

const LoginContainer = () => {
  const { authService } = useAuth();
  const token = authService.getAuthTokens();

  const login = async () => {
    authService.authorize();
  }

  return (
    <Login
      isPending={authService.isPending()}
      login={login}
      token={JSON.stringify(token)}
    />
  );
};

export default LoginContainer;
