import { useContext, useState, useEffect } from 'react';
import { Avatar, Dropdown, Layout as LayoutAnt, Menu, MenuProps, Spin } from 'antd';
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  AlertOutlined
} from '@ant-design/icons';
import { useAuth  } from "react-oauth2-pkce";
import logoReact from "../logo.svg";
import AppContext from '../context/AppContext';
import { getRol } from '../utils/common';
import '../sass/layout.scss';

const { Header, Content, Sider } = LayoutAnt;

const Layout = () => {
  const { defaultMenu, setIsLogin, userInfo } = useContext(AppContext);
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [items2, setItems2] = useState<MenuProps['items'] | []>([]);
  const [loading, setLoading] = useState(false);
  const { authService } = useAuth();

  const onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  const getMenus = () => {
    const menus = [{
      key: 'home',
      icon: <HomeOutlined />,
      label: 'Inicio',
      onClick: () => navigate("/", { replace: true })
    }];
    const permission = Object.keys(userInfo).length > 0 ? getRol(userInfo) : false;
    if (permission) {
      menus.push({
        key: 'companies',
        icon: <UsergroupAddOutlined />,
        label: 'Compañias',
        onClick: () => navigate("/companies", { replace: true })
      }, {
        key: 'alerts',
        icon: <AlertOutlined />,
        label: 'Alertas',
        onClick: () => navigate("/alerts", { replace: true })
      });
    }
    return menus;
  };

  useEffect(() => {
    // setLoading(true);
    const menuAccess = getMenus();
    setItems2(menuAccess);
  }, []);

  const handleLogout = async () => {
    localStorage.clear();
    setIsLogin(false);
    authService.logout(true);
  };

  const MenuDrop = () => (
    <Menu
      onClick={handleLogout}
      items={[
        {
          label: 'Cerrar sesión',
          key: '1',
        }
      ]}
    />
  );

  return (
    <LayoutAnt>
      <Header className="header header-fixed">
        <div className="logo">
          <img src={logoReact} className="App-logo" alt="logo" />
        </div>
        <Dropdown
          overlay={() => <MenuDrop />}
          placement="bottomRight"
          className="content-user-dropdown"
        >
          <a
            href="javascrip:void()"
            className="custom-header-user"
            onClick={e => e.preventDefault()}
          >
            <Avatar icon={<UserOutlined />} />
            <span style={{ paddingLeft: 8 }}>{JSON.parse(localStorage.getItem('currentUser') || '{}')?.name || ""}</span>
          </a>
        </Dropdown>
      </Header>
      <LayoutAnt>
        <Sider
          width={200}
          className="site-layout-background sider-fixed"
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
        >
          <Spin spinning={loading} className={loading ? 'custom-spinning' : ''}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['home']}
              selectedKeys={[`${defaultMenu}`]}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
              items={items2}
            />
          </Spin>
        </Sider>
        <LayoutAnt
          className="content-layout-section"
          style={{
            padding: '0 24px 24px',
            marginTop: '64px',
            marginLeft: '200px'
          }}
        >
          <Content
            className="content-section-principal"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </LayoutAnt>
      </LayoutAnt>
    </LayoutAnt>
  );
};

export default Layout;
