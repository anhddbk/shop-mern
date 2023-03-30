import { BellFilled, MailOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Badge, Col, Drawer, Image, List, Menu, MenuProps, Space, Typography } from 'antd';
import { useState } from 'react';

const items: MenuProps['items'] = [
  {
    icon: <MenuFoldOutlined style={{ fontSize: 24 }}/>,
    key:'submenu',
    children: [
      {
        label:'Name',
        key:'name'
      },
      {
        label:'Logout',
        key:'logout'
      },
    ]
  }
]

function Header() {
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  return (
    <div className="Header">
      <Col span={8}>
        <Image
          width={40}
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        ></Image>
      </Col>

      <Col span={8}>
        <Typography.Title style={{ textAlign: 'center' }}>Shop MERN</Typography.Title>
      </Col>

      <Col span={8} className="HeaderRight">
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
          <Menu 
          items={items}
          mode="horizontal"
          />
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
      </Col>
    </div>
  );
}

export default Header;
