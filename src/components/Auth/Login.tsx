import { Button, Spin } from "antd";
import { ILoginProps } from "../../interfaces/ILoginProps";
import "../../sass/login.scss";

const Login = ({
  isPending,
  login = () => {},
  token
}: ILoginProps) => {

  return (
    <Spin tip="Loading..." spinning={isPending}>
      <div className="login-container">
        <h2>Bienvenido(a) al SSB</h2>
        <Button type="primary" onClick={() => login()}>Login</Button>
      </div>
    </Spin>
  )

};

export default Login;
