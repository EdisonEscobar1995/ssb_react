import { UserInfo, UserRol } from "../interfaces/UserConnect";
import { ROL_EDITOR, ROL_VISUALIZER } from "./constants";

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('currentUser') || '');
};

export const getRol = (userInfo: UserInfo | any) => {
  let filter = [];
  if (Object.keys(userInfo).length > 0) {
    filter = (userInfo.roles || []).filter((rol: UserRol) => rol.role === ROL_VISUALIZER || rol.role === ROL_EDITOR);
  }
  return filter.length > 0;
};
