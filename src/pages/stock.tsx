import { Space, Table, Typography } from 'antd';
import { getInventory } from 'api/api';
import { columnsStock } from 'components/columns';
import React, { useState, useEffect } from 'react';

const StockPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
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
          columns={columnsStock}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </Space>
    </div>
  );
};

export default StockPage;
