import { Space, Table, Typography } from 'antd';
import { getOrders } from 'api/api';
import { columnsOrders } from 'components/columns';
import { useState, useEffect } from 'react';

const OrdersPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
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
          columns={columnsOrders}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </Space>
    </div>
  );
}

export default OrdersPage;
