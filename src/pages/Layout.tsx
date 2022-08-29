import { useContext, useState, useEffect } from 'react';
import { Avatar, Dropdown, Layout as LayoutAnt, Menu, MenuProps, Spin } from 'antd';
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  RadarChartOutlined
} from '@ant-design/icons';
import { useAuth  } from "react-oauth2-pkce";
import '../sass/layout.scss';

import logoReact from "../logo.svg";
import AppContext from '../context/AppContext';

const { Header, Content, Sider } = LayoutAnt;

const Layout = () => {
  const { defaultMenu, setIsLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [items2, setItems2] = useState<MenuProps['items'] | []>([]);
  const [loading, setLoading] = useState(false);
  const { authService } = useAuth();

  const onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  useEffect(() => {
    // setLoading(true);
    // getAllMenus();
    setItems2([{
      key: 'home',
      icon: <HomeOutlined />,
      label: 'Inicio',
      onClick: () => navigate("/", { replace: true })
    }, {
      key: 'companies',
      icon: <UsergroupAddOutlined />,
      label: 'Permisos',
      onClick: () => navigate("/companies", { replace: true })
    }, {
      key: 'audit',
      icon: <RadarChartOutlined />,
      label: 'Audit & Self assessment',
      onClick: () => navigate("/audit", { replace: true })
    }]);
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
