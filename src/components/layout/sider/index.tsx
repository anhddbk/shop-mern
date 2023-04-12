import React, { useEffect, useState } from 'react';
import {
  HomeOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';

const Sider: React.FC = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState('/');

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);
  const navigate = useNavigate();
  return (
    <Menu
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
    ></Menu>
  );
};

export default Sider;
