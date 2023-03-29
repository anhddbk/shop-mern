import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Customers from './Customers';
import Dashboard from './Dashboard';
import Inventory from './Inventory';
import Orders from './Orders';

function PageContent() {
  return (
    <div className="Content">
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
      </Routes>
    </div>
  );
}

export default PageContent;
