import Customers from '../Customers';
import Dashboard from '../Dashboard';
import Inventory from '../Inventory';
import Orders from '../Orders';

export const routes = [
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/inventory', element: <Inventory /> },
  { path: '/customers', element: <Customers /> },
  { path: '/orders', element: <Orders /> },
];
