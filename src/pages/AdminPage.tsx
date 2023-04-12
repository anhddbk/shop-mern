import { Route, Routes } from 'react-router-dom';

import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import Sider from '../components/layout/sider';
import { DashboardRoutes } from 'modules/dashboard/routes/DashboardRoutes';
import { ContentStyled, FlexStyled } from 'styled/common';

const LayoutAdmin: React.FC = () => {
  return (
    <FlexStyled flexDirection="column" minWidth={100} minHeight={100}>
      <Header></Header>
      <FlexStyled flex={1} background="rgba(0, 0, 0, 0.05)">
        <Sider></Sider>
        <ContentStyled padding="0px 0px 0px 12px">
          <Routes>
            {DashboardRoutes.map((route, index) => {
              return <Route key={index} path={route.path} element={route.element}></Route>;
            })}
          </Routes>
        </ContentStyled>
      </FlexStyled>
      <Footer></Footer>
    </FlexStyled>
  );
};

export default LayoutAdmin;
