export interface ILoginProps {
  isPending: boolean;
  isAuthenticated?: boolean;
  token?: string;
  logout?: Function;
  login?: Function;
}
