import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Space, Table, Typography } from 'antd';
import React, { useState, useEffect } from 'react';

import { getOrders, getCustomers, getInventory } from 'api/api';
import TotalRevenueChart from 'components/charts/TotalRevenue';
import { DashboardCard } from 'constants/Card';
import { columnsRecentOrders } from 'components/columns';

const HomePage: React.FC = () => {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getCustomers().then((res) => {
      setCustomers(res.total);
    });
  }, []);

  return (
    <div>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space direction="horizontal">
          <DashboardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: 'green',
                  backgroundColor: 'rgba(0,255,0,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={'Orders'}
            value={orders}
          />
          <DashboardCard
            icon={
              <ShoppingOutlined
                style={{
                  color: 'blue',
                  backgroundColor: 'rgba(0,0,255,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={'Inventory'}
            value={inventory}
          />
          <DashboardCard
            icon={
              <UserOutlined
                style={{
                  color: 'purple',
                  backgroundColor: 'rgba(0,255,255,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={'Customer'}
            value={customers}
          />
          <DashboardCard
            icon={
              <DollarCircleOutlined
                style={{
                  color: 'red',
                  backgroundColor: 'rgba(255,0,0,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={'Revenue'}
            value={revenue}
          />
        </Space>
        <Space>
          <RecentOrders />
          <TotalRevenueChart />
        </Space>
      </Space>
    </div>
  );
};

function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text>Recent Orders</Typography.Text>
      <Table
        rowKey={(record) => record.id}
        columns={columnsRecentOrders}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
}

export default HomePage;
