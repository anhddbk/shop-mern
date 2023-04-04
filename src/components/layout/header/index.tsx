import { BellFilled, MailOutlined } from '@ant-design/icons';
import { Badge, Col, Drawer, Dropdown, Image, List, MenuProps, Space, Typography } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'redux/hook';
import { authActions } from 'modules/auth/redux/authSlice';
import { HeaderRightStyled, HeaderStyled, menuStyle } from 'styled/Layout';
import { UserHeading } from './UserHeading';

const Header: React.FC = () => {
  const dispath = useAppDispatch();
  const navigate = useNavigate();
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const onClick: MenuProps['onClick'] = ({ values }: any) => {
    dispath(authActions.logout());
    navigate('/login');
    console.log('Received values of form: ', values);
  };
  const items: MenuProps['items'] = [
    {
      label: 'Logout',
      key: '1',
    },
  ];
  return (
    <HeaderStyled>
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
        <HeaderRightStyled>
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
                <UserHeading/>
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
            <List></List>
          </Drawer>
          <Drawer
            title="Notifications"
            open={notificationsOpen}
            onClose={() => {
              setNotificationsOpen(false);
            }}
            maskClosable
          >
            <List></List>
          </Drawer>
        </HeaderRightStyled>
      </Col>
    </HeaderStyled>
  );
};

export default Header;
