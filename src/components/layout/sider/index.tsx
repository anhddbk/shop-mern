import React, { useEffect, useState } from 'react';
import {
  HomeOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { SideMenuStyled } from 'styled/Layout';

const Sider: React.FC = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState('/');

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);
  const navigate = useNavigate();
  return (
    <SideMenuStyled
      style={{ height: '100%' }}
      mode="vertical"
      onClick={(item) => {
        navigate(item.key);
      }}
      defaultSelectedKeys={['/admin/dashboard']}
      selectedKeys={[selectedKeys]}
      items={[
        {
          label: 'Home',
          icon: <HomeOutlined />,
          key: '/',
        },
        {
          label: 'Product',
          icon: <ShoppingOutlined />,
          key: '/products',
        },
        {
          label: 'Stock',
          icon: <ShopOutlined />,
          key: '/stock',
        },
        {
          label: 'Orders',
          icon: <ShoppingCartOutlined />,
          key: '/orders',
        },
        {
          label: 'Customers',
          icon: <UserOutlined />,
          key: '/customers',
        },
      ]}
    ></SideMenuStyled>
  );
};

export default Sider;
