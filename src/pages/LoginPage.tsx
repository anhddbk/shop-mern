import Header from 'components/layout/header';
import { AuthRoutes } from 'modules/auth/routes/AuthRoutes';
import { Route, Routes } from 'react-router-dom';
import { WrapperStyled } from 'styled/common';

function LoginPage() {
  return (
    <WrapperStyled
      background="linear-gradient(132deg, #ec5218, #1665c1)"
      minWidth={100}
      minHeight={100}
    >
      <Header />
      <Routes>
        {AuthRoutes.map((route, index) => {
          return <Route key={index} path={route.path} element={route.element}></Route>;
        })}
      </Routes>
    </WrapperStyled>
  );
}

export default LoginPage;
