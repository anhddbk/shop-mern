import { Image, Typography } from 'antd';
import Login from 'modules/auth/pages/Login';
import { FlexCenterStyled, HeaderStyled, WrapperStyled } from 'styled/LoginPage';

function LoginPage() {
  return (
    <WrapperStyled>
      <div>
        <HeaderStyled>
          <FlexCenterStyled>
            <Image
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              width={50}
            />
            <Typography.Title style={{ paddingLeft: 12 }}>Shop MERN</Typography.Title>
          </FlexCenterStyled>
          <Typography.Text>My first project!</Typography.Text>
        </HeaderStyled>
        <Login />
      </div>
    </WrapperStyled>
  );
}

export default LoginPage;
