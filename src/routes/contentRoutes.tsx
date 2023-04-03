import CustomersPage from 'pages/customers';
import HomePage from 'pages/home';
import OrdersPage from 'pages/orders';
import StockPage from 'pages/stock';

export const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/stock', element: <StockPage /> },
  { path: '/customers', element: <CustomersPage /> },
  { path: '/orders', element: <OrdersPage /> },
  // { path: '/products', element: <Products /> },
];
