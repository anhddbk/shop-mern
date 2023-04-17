import HomePage from '../pages/Home';
import CustomersPage from '../pages/Customers';
import OrdersPage from '../pages/Orders';
import InventoryPage from '../pages/Inventory';

export const DashboardRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/customers', element: <CustomersPage /> },
  { path: '/orders', element: <OrdersPage /> },
  { path: '/inventory', element: <InventoryPage /> },
];
