import { useContext, useEffect } from "react";
import { Home } from "../components/Home/Home";
import AppContext from "../context/AppContext";

export const HomeContainer = () => {
  const { setDefaultMenu } = useContext(AppContext);

  useEffect(() => {
    if (setDefaultMenu) {
      setDefaultMenu('home');
    };
  }, []);
  
  return (
    <Home />
  )
};
