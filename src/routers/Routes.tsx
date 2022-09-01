import React, { useState, useEffect, lazy } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes as RoutesRender,
} from "react-router-dom";
import AppContext from "../context/AppContext";
import { useAuth  } from "react-oauth2-pkce";
import { isValidToken } from "../utils/auth";
import { AuthTokens } from "react-oauth2-pkce/dist/AuthService";
import { TokenCognitoService } from "../services/security/tokenCognito";

const AsyncLogin = lazy(() => import("../pages/Login"));
const AsyncHomePage = lazy(() => import("../pages/Home"));
const AsyncLayout = lazy(() => import("../pages/Layout"));
const AsyncCompanies = lazy(() => import("../pages/Company/Companies"));

export const Routes: React.FC = () => {
  const [defaultMenu, setDefaultMenu] = useState('home');
  const [loading, setLoading] = useState(true);
  const { authService } = useAuth();
    
  const refreshToken = async (token: AuthTokens) => {
    console.log('refrescando token');
    await authService.fetchToken(token.refresh_token, true);
  };

  const getFirstToken = async () => {
    debugger;
    const token = await TokenCognitoService.getTokenCognito();
    return token;
  };

  useEffect(() => {
    if (authService.isAuthenticated()) {
      getFirstToken();
      const token = authService.getAuthTokens();
      console.log('expiracion === ', new Date(token?.expires_at));
      if (token && !isValidToken(token?.expires_at)) {
        refreshToken(token);
      }
    }
    setLoading(false);
  }, []);

  return (
    <AppContext.Provider value={{ setIsLogin: () => {}, defaultMenu, setDefaultMenu }}>
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
                <Route path="companies">
                  <Route index element={<AsyncCompanies />} />
                  {/* <Route path="form" element={<User />} />
                  <Route path="form/:id" element={<User />} /> */}
                </Route>
                {/* <Route path="menu">
                  <Route index element={<Menus />} />
                  <Route path="form" element={<Menu />} />
                  <Route path="form/:id" element={<Menu />} />
                </Route>
                <Route path="register">
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
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </RoutesRender>
          )}

        </Router>
      )}
    </AppContext.Provider>
  );
};
