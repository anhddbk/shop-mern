import Auth from 'components/auth';
import Admin from 'components/dashboard';

//Public routes
const publicRoutes = [
  { path: '/', element: <Auth /> },
  { path: '/admin/*', element: <Admin /> },
];

//Private routes
const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
