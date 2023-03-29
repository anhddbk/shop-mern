import { Route, Routes } from 'react-router-dom';
import { routes } from './Routes';

function PageContent() {
  return (
    <div className="Content">
      <Routes>
      {routes.map((route, index) => {
              return <Route key={index} path={route.path} element={route.element}></Route>;
            })}
      </Routes>
    </div>
  );
}

export default PageContent;
