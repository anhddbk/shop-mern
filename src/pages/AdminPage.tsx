import { Route, Routes } from 'react-router-dom';

import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import Sider from '../components/layout/sider';
import { ContentStyled, SideMenuAndPageContentStyled } from 'styled/Layout';
import { DashboardRoutes } from 'modules/dashboard/routes/DashboardRoutes';
import { WrapperStyled } from 'styled/common';

const LayoutAdmin: React.FC = () => {
  return (
    <WrapperStyled minWidth={100} minHeight={100}>
      <Header></Header>
      <SideMenuAndPageContentStyled>
        <Sider></Sider>
        <ContentStyled>
          <Routes>
            {DashboardRoutes.map((route, index) => {
              return <Route key={index} path={route.path} element={route.element}></Route>;
            })}
          </Routes>
        </ContentStyled>
      </SideMenuAndPageContentStyled>
      <Footer></Footer>
    </WrapperStyled>
  );
};

export default LayoutAdmin;
