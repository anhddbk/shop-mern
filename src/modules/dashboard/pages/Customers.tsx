import { Avatar, Space, Table, Typography } from 'antd';
import React, { useState, useEffect } from 'react';
import { ColumnsType } from 'antd/es/table';
import { CustomersApi } from 'services/customersApi';

type CustomersProps = {
  key: number;
  id: number;
  title: string;
};

const columns: ColumnsType<CustomersProps> = [
  {
    title: 'Photo',
    dataIndex: 'image',
    render: (link) => {
      return <Avatar src={link} />;
    },
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
  },
  {
    title: 'LastName',
    dataIndex: 'lastName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
  },
  {
    title: 'address',
    dataIndex: 'address',
    render: (address) => {
      return (
        <span>
          {address.address}, {address.city}
        </span>
      );
    },
  },
];

const CustomersPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setLoading(true);
    CustomersApi.getAll().then((response: any) => {
      setDataSource(response.users);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Customers</Typography.Title>
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

export default CustomersPage;
