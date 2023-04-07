import { Route, Routes } from 'react-router-dom';

import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import Sider from '../components/layout/sider';
import { ContentStyled, LayoutStyled, SideMenuAndPageContentStyled } from 'styled/Layout';
import { subRoutes } from 'modules/dashboard/routes/SubRoutes';

const LayoutAdmin: React.FC = () => {
  return (
    <LayoutStyled>
      <Header></Header>
      <SideMenuAndPageContentStyled>
        <Sider></Sider>
        <ContentStyled>
          <Routes>
            {subRoutes.map((route, index) => {
              return <Route key={index} path={route.path} element={route.element}></Route>;
            })}
          </Routes>
        </ContentStyled>
      </SideMenuAndPageContentStyled>
      <Footer></Footer>
    </LayoutStyled>
  );
};

export default LayoutAdmin;
