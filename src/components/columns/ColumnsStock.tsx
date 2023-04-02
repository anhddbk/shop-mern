import { Avatar, Rate } from "antd";
import { ColumnsType } from "antd/es/table";
import { InventoryProps } from "models";

export const columnsStock:ColumnsType<InventoryProps>= [
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      render: (link) => {
        return <Avatar src={link} />;
      },
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (value) => <span>${value}</span>,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      render: (rating) => {
        return <Rate value={rating} allowHalf disabled />;
      },
    },
    {
      title: "Stock",
      dataIndex: "stock",
    },
  
    {
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
  ]