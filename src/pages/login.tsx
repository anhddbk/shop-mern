import { Image, Typography } from 'antd';
import Login from 'components/auth/Login';
import { ContainerStyled, HeaderStyled, TitleStyled } from 'styled/LoginPage';

function LoginPage() {
  return (
    <ContainerStyled>
      <div>
        <HeaderStyled>
          <TitleStyled>
            <Image
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              width={50}
            />
            <Typography.Title style={{ paddingLeft: 12 }}>Shop MERN</Typography.Title>
          </TitleStyled>
          <Typography.Text>My first project!</Typography.Text>
        </HeaderStyled>
        <Login />
      </div>
    </ContainerStyled>
  );
}

export default LoginPage;
