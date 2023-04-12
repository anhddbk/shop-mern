import { useState, useEffect } from 'react';
import { Space, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { getOrders, OrdersApi } from 'services/ordersApi';

type OrderProps = {
  key: number;
  id: number;
  title: string;
  quantity: number;
  price: number;
};

const columns: ColumnsType<OrderProps> = [
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    render: (value) => <span>${value}</span>,
  },
  {
    title: 'DiscountedPrice',
    dataIndex: 'discountedPrice',
    render: (value) => <span>${value}</span>,
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
  },
  {
    title: 'Total',
    dataIndex: 'total',
  },
];

const OrdersPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setLoading(true);
    // getOrders().then((res) => {
    //   setDataSource(res.products);
    // setLoading(false);
    // });
    OrdersApi.getAll().then((response) => {
      setDataSource((response as any).products);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Orders</Typography.Title>
        <Table
          rowKey={(record) => record.id}
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </Space>
    </div>
  );
};

export default OrdersPage;
