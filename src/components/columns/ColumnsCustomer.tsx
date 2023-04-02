import { Avatar } from "antd";
import { ColumnsType } from "antd/es/table";
import { CustomersProps } from "models";

export const columnsCustomers: ColumnsType<CustomersProps> = [
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
