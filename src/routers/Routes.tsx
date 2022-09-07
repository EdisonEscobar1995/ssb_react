import React, { useState, useEffect, lazy } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes as RoutesRender,
} from "react-router-dom";
import AppContext from "../context/AppContext";
import { useAuth } from "react-oauth2-pkce";
import { isValidToken } from "../utils/auth";
import { AuthTokens } from "react-oauth2-pkce/dist/AuthService";
import { TokenCognitoService } from "../services/security/tokenCognito";
import { UserService } from "../services/security/userConnect";
import { getRol } from "../utils/common";

const AsyncLogin = lazy(() => import("../pages/Login"));
const AsyncHomePage = lazy(() => import("../pages/Home"));
const AsyncLayout = lazy(() => import("../pages/Layout"));
const AsyncCompanies = lazy(() => import("../pages/Company/Companies"));
const AsyncAlerts = lazy(() => import("../pages/Alert/Alerts"));

export const Routes: React.FC = () => {
  const { authService } = useAuth();
  const token = authService.getAuthTokens();
  const [defaultMenu, setDefaultMenu] = useState('home');
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const [tokenCognito, setTokenCognito] = useState("");

  const refreshToken = async (token: AuthTokens) => {
    console.log('refrescando token');
    await authService.fetchToken(token.refresh_token, true);
  };

  const getFirstTokenCognito = async () => {
    const tokenCognitoAux = await TokenCognitoService.getTokenCognito();
    setTokenCognito(tokenCognitoAux);
  };

  const getInfoUser = async () => {
    const user = await UserService.getUserInfo(token?.access_token);
    console.log("user == ", user);
    setUserInfo(user);
  };

  useEffect(() => {
    if (authService.isAuthenticated()) {
      getInfoUser();
      getFirstTokenCognito();
      console.log('expiracion === ', new Date(token?.expires_at));
      if (token && !isValidToken(token?.expires_at)) {
        refreshToken(token);
      }
    }
    setLoading(false);
  }, []);

  return (
    <AppContext.Provider value={{
      setIsLogin: () => { },
      defaultMenu,
      setDefaultMenu,
      userInfo,
      tokenCognito
    }}>
      {!loading && (
        <Router>
          {!authService.isAuthenticated() ? (
            <RoutesRender>
              <Route path="/login" element={<AsyncLogin />} />
              <Route
                path="*"
                element={<Navigate to="/login" replace />}
              />
            </RoutesRender>
          ) : (
            <RoutesRender>
              <Route path="/" element={<AsyncLayout />}>
                <Route index element={<AsyncHomePage />} />
                {(Object.keys('userInfo').length > 0 && getRol(userInfo)) && (
                  <>
                    <Route path="companies">
                      <Route index element={<AsyncCompanies />} />
                      {/* <Route path="form" element={<User />} />
                        <Route path="form/:id" element={<User />} /> */}
                    </Route>
                    <Route path="alerts">
                      <Route index element={<AsyncAlerts />} />
                      {/* <Route path="form" element={<Menu />} />
                  <Route path="form/:id" element={<Menu />} /> */}
                    </Route>
                    {/* <Route path="register">
                  <Route index element={<Registers />} />
                  <Route path="form" element={<Register />} />
                  <Route path="form/:id" element={<Register />} />
                </Route>
                <Route path="ticket">
                  <Route index element={<QualityReports />} />
                  <Route path="form" element={<QualityReport />} />
                  <Route path="form/:id" element={<QualityReport />} />
                </Route>
                <Route path="audit">
                  <Route index element={<Audits />} />
                  <Route path="form" element={<Audit />} />
                  <Route path="form/:id" element={<Audit />} />
                </Route>
                <Route path="ticketresponse">
                  <Route index element={<SupplierInvestigation />} />
                  <Route path="form/:idTicket/:id" element={<SupplierInvestigation />} />
                </Route> */}
                  </>
                )}

                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </RoutesRender>
          )}

        </Router>
      )}
    </AppContext.Provider>
  );
};
