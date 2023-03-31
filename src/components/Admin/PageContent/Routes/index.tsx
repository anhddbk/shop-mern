import Customers from '../Customers';
import Home from '../Home';
import Stock from '../Stock';
import Orders from '../Orders';
import Products from '../Products';

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/stock', element: <Stock /> },
  { path: '/customers', element: <Customers /> },
  { path: '/orders', element: <Orders /> },
  { path: '/products', element: <Products /> },
];
