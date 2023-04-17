import { useState, useEffect } from 'react';
import { Modal, Space, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { OrdersApi } from 'services/ordersApi';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [selectedRow, setSelectedRow] = useState<OrderProps>();
  const handleDoubleClick = (record: any) => {
    setSelectedRow(record);
    setIsModalOpen(true);
    console.log(record);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setLoading(true);
    OrdersApi.getAll().then((response: any) => {
      setDataSource(response.products);
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
          onRow={(record, rowIndex) => {
            return {
              onDoubleClick: () => handleDoubleClick(record),
            };
          }}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          {selectedRow && (
            <>
              <p>{selectedRow.title}</p>
            </>
          )}
        </Modal>
      </Space>
    </div>
  );
};

export default OrdersPage;
