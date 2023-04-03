import { ColumnsType } from 'antd/es/table';
import { OrderProps } from 'models';

export const columnsRecentOrders: ColumnsType<OrderProps> = [
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
