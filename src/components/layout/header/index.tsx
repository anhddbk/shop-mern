import { BellFilled, MailOutlined } from '@ant-design/icons';
import { Badge, Col, Drawer, Dropdown, Image, List, MenuProps, Space, Typography } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'redux/hook';
import { authActions } from 'modules/auth/redux/authSlice';
import { UserHeading } from './UserHeading';
import { HeaderAndFooterStyled, menuStyle } from 'styled/Layout/HeaderAndFooter.styled';
import { FlexStyled } from 'styled/common';

const Header: React.FC = () => {
  const dispath = useAppDispatch();
  const navigate = useNavigate();
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const onClick: MenuProps['onClick'] = ({ values }: any) => {
    dispath(authActions.logout());
    navigate('/auth/login');
    console.log('Received values of form: ', values);
  };
  const items: MenuProps['items'] = [
    {
      label: 'Logout',
      key: '1',
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
                <UserHeading />
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
        </FlexStyled>
      </Col>
    </HeaderAndFooterStyled>
  );
};

export default Header;
