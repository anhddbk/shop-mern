import { Image, Typography } from 'antd';
import '../../styled/LoginPage/Auth.styled.scss';
import Login from './Login';

function Auth() {
  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <div className="title">
            <Image
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              width={50}
            />
            <Typography.Title style={{ paddingLeft: 12 }}>Shop MERN</Typography.Title>
          </div>
          <Typography.Text>My first project!</Typography.Text>
        </div>

        <div className="login">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Auth;
