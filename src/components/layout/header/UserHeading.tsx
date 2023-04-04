import { Avatar, Typography } from 'antd';
import { selectUser } from 'modules/auth/redux/authSlice';
import { useSelector } from 'react-redux';
// import { selectUser } from 'modules/auth/redux/authSlice';

export const UserHeading: React.FC = () => {
  const name = useSelector(selectUser);
  return (
    <>
      <Avatar></Avatar> <Typography.Text>{name.name}</Typography.Text>
    </>
  );
};
