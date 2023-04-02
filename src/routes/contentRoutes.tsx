import Customers from 'pages/customers';
import Home from 'pages/home';
import Orders from 'pages/orders';
import Stock from 'pages/stock';

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/stock', element: <Stock /> },
  { path: '/customers', element: <Customers /> },
  { path: '/orders', element: <Orders /> },
  // { path: '/products', element: <Products /> },
];
