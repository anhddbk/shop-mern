import HomePage from '../pages/Home';
import CustomersPage from '../pages/Customers';
import OrdersPage from '../pages/Orders';
import StockPage from '../pages/Stock';

export const subRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/customers', element: <CustomersPage /> },
  { path: '/orders', element: <OrdersPage /> },
  { path: '/stock', element: <StockPage /> },
  // { path: '/products', element: <Products /> },
];
