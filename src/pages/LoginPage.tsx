import { Image, Typography } from 'antd';
import Login from 'modules/auth/pages/Login';
import { FlexCenterStyled, WrapperStyled } from 'styled/LoginPage';

function LoginPage() {
  return (
    <WrapperStyled
      background="linear-gradient(132deg, #ec5218, #1665c1)"
      minWidth={100}
      minHeight={100}
    >
      <FlexCenterStyled flexDirection="column">
        <FlexCenterStyled>
          <Image
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            width={50}
          />{' '}
          <Typography.Title>Shop MERN</Typography.Title>
        </FlexCenterStyled>
        <Login />
      </FlexCenterStyled>
    </WrapperStyled>
  );
}

export default LoginPage;
