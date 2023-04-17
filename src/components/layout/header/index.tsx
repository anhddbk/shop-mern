import { BellFilled, MailOutlined } from '@ant-design/icons';
import {
  Avatar,
  Badge,
  Col,
  Drawer,
  Dropdown,
  Image,
  List,
  MenuProps,
  Space,
  Typography,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'redux/hook';
import { authActions, selectUser } from 'modules/auth/redux/authSlice';
import { HeaderAndFooterStyled } from 'styled/HeaderAndFooter.styled';
import { FlexStyled } from 'styled/common';
import { useSelector } from 'react-redux';
import { CommentsApi, OrdersApi } from 'services';

const menuStyle = {
  minWidth: 150,
  position: 'relative',
  top: 6,
  boxShadow: 'none',
  padding: 0,
  backgroundColor: '#b8bdd6',
  borderRadius: 0,
};

const Header: React.FC = () => {
  const user = useSelector(selectUser);
  const dispath = useAppDispatch();
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    CommentsApi.getAll().then((response: any) => {
      setComments(response.comments);
    });
    OrdersApi.getAll().then((response: any) => {
      setOrders(response.products);
    });
  }, []);

  const onClick: MenuProps['onClick'] = ({ values }: any) => {
    if (user.name) {
      dispath(authActions.logout());
      navigate('/auth/login');
      console.log('Received values of form: ', values);
    }
  };
  const items: MenuProps['items'] = user.name
    ? [
        {
          label: 'Logout',
          key: '1',
        },
      ]
    : [
        {
          label: 'Login',
          key: '2',
        },
      ];
  return (
    <HeaderAndFooterStyled
      height={50}
      borderBottom="1px solid rgba(0, 0, 0, 0.15)"
      alignItems="center"
      padding="4px 20px 4px 12px"
      justifyContent="space-between"
    >
      <Col span={8}>
        <Image
          width={40}
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        ></Image>
      </Col>

      <Col span={8}>
        <Typography.Title style={{ textAlign: 'center', margin: 0 }}>Shop MERN</Typography.Title>
      </Col>

      <Col span={8}>
        <FlexStyled justifyContent="flex-end">
          <Space>
            <Badge count={5} dot>
              <MailOutlined
                style={{ fontSize: 24 }}
                onClick={() => {
                  setCommentsOpen(true);
                }}
              />
            </Badge>
            <Badge count={20} dot>
              <BellFilled
                style={{ fontSize: 24 }}
                onClick={() => {
                  setNotificationsOpen(true);
                }}
              />
            </Badge>
            <Dropdown
              menu={{ items, onClick }}
              dropdownRender={(menu) => (
                <>{React.cloneElement(menu as React.ReactElement, { style: menuStyle })}</>
              )}
            >
              <Space>
                <Avatar src={user.avatar}></Avatar>
                <Typography.Text>{user.name}</Typography.Text>
              </Space>
            </Dropdown>
          </Space>
          <Drawer
            title="Comments"
            open={commentsOpen}
            onClose={() => {
              setCommentsOpen(false);
            }}
            maskClosable
          >
            <List
              dataSource={comments}
              renderItem={(item: any) => {
                return <List.Item>{item.body}</List.Item>;
              }}
            ></List>
          </Drawer>
          <Drawer
            title="Notifications"
            open={notificationsOpen}
            onClose={() => {
              setNotificationsOpen(false);
            }}
            maskClosable
          >
            <List
              dataSource={orders}
              renderItem={(item: any) => {
                return (
                  <List.Item>
                    <Typography.Text strong>{item.title}</Typography.Text> has been ordered!
                  </List.Item>
                );
              }}
            ></List>
          </Drawer>
        </FlexStyled>
      </Col>
    </HeaderAndFooterStyled>
  );
};

export default Header;
