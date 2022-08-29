import React, { useState, useEffect, lazy } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes as RoutesRender,
} from "react-router-dom";
import { useAuth } from "oidc-react";
import AppContext from "../context/AppContext";
import { useUserIdentity } from "react-oidc-client";
import { verifyToken } from "../utils/auth";

const AsyncLogin = lazy(() => import("../pages/Login"));
const AsyncHomePage = lazy(() => import("../pages/Home"));
const AsyncLayout = lazy(() => import("../pages/Layout"));

export const Routes: React.FC = () => {
  const [defaultMenu, setDefaultMenu] = useState('home');
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  
  // const auth = useAuth();
  // console.log('dataUser ===== ',  auth?.userData);

  useEffect(() => {
    // if (localStorage.getItem('token_access')) {
    //   if (verifyToken(Number(localStorage.getItem('token_exp')))) {
    //     setIsLogin(true);
    //   } else {
    //     localStorage.clear();
    //     setIsLogin(false);
    //   }
    //   setLoading(false);
    // } else {
    //   setLoading(false);
    // }
    // setIsLogin(true);
    setLoading(false);
  }, []);

  return (
    <AppContext.Provider value={{ setIsLogin, defaultMenu, setDefaultMenu }}>
      {!loading && (
        <Router>
          {!isLogin ? (
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
                {/* <Route path="permissions">
                  <Route index element={<Users />} />
                  <Route path="form" element={<User />} />
                  <Route path="form/:id" element={<User />} />
                </Route> */}
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
