import { Space, Table, Typography } from 'antd';
import { getCustomers } from 'api/api';
import { columnsCustomers } from 'components/columns/ColumnsCustomer';
import React, { useState, useEffect } from 'react';

const Customers: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
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
          columns={columnsCustomers}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </Space>
    </div>
  );
};

export default Customers;
