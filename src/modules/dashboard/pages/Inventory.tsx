import React, { useState, useEffect } from 'react';
import { Avatar, Rate, Space, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { InventoryApi } from 'services/inventoryApi';

type StockProps = {
  key: number;
  id: number;
  title: string;
  price: number;
};

const columns: ColumnsType<StockProps> = [
  {
    title: 'Thumbnail',
    dataIndex: 'thumbnail',
    render: (link) => {
      return <Avatar src={link} />;
    },
  },
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
    title: 'Rating',
    dataIndex: 'rating',
    render: (rating) => {
      return <Rate value={rating} allowHalf disabled />;
    },
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
  },

  {
    title: 'Brand',
    dataIndex: 'brand',
  },
  {
    title: 'Category',
    dataIndex: 'category',
  },
];

const InventoryPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setLoading(true);
    InventoryApi.getAll().then((response: any) => {
      setDataSource(response.products);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Inventory</Typography.Title>
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

export default InventoryPage;