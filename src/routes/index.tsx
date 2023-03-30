import Auth from '../components/LoginPage';
import Admin from 'components/dashboard';

//Public routes
const publicRoutes = [
  { path: '/login', element: <Auth /> },
  { path: '*', element: <Admin /> },
];

//Private routes
const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
