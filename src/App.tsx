import { ConfigProvider } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from 'routes';

function App() {
  return (
    <Router>
      <ConfigProvider>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            return <Route key={index} path={route.path} element={route.element}></Route>;
          })}
        </Routes>
      </div>
      </ConfigProvider>
    </Router>
  );
}

export default App;
