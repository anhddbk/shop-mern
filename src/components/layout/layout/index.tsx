import Footer from '../footer';
import Header from '../header';
import Sider from '../sider';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'routes/contentRoutes';
import { ContentStyled, LayoutStyled, SideMenuAndPageContentStyled } from 'styled/Layout';

const LayoutAdmin: React.FC = () => {
  return (
    <LayoutStyled>
      <Header></Header>
      <SideMenuAndPageContentStyled>
        <Sider></Sider>
        <ContentStyled>
          <Routes>
            {routes.map((route, index) => {
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
