import React, { useState, useEffect } from 'react';
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Space, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';

import TotalRevenueChart from 'components/charts/TotalRevenue';
import { Cards } from 'components/cards/Card';
import { CustomersApi, InventoryApi, OrdersApi } from 'services';


type RecentOrderProps = {
  key: number;
  id: number;
  title: string;
  quantity: number;
  price: number;
};

const columns: ColumnsType<RecentOrderProps> = [
  {
    key: 'title',
    title: 'Title',
    dataIndex: 'title',
  },
  {
    key: 'quantity',
    title: 'Quantity',
    dataIndex: 'quantity',
  },
  {
    key: 'price',
    title: 'Price',
    dataIndex: 'discountedPrice',
  },
];

const HomePage: React.FC = () => {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    OrdersApi.getAll().then((response: any) => {
      setOrders(response.total);
      setRevenue(response.discountedTotal);
    });
    InventoryApi.getAll().then((response: any) => {
      setInventory(response.total);
    });
    CustomersApi.getAll().then((response: any) => {
      setCustomers(response.total);
    });
  }, []);

  return (
    <div>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space direction="horizontal">
          <Cards
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
          <Cards
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
          <Cards
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
          <Cards
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
    OrdersApi.getAll().then((response: any) => {
      setDataSource(response.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text>Recent Orders</Typography.Text>
      <Table
        rowKey={(record) => record.id}
        columns={columns}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
}

export default HomePage;
