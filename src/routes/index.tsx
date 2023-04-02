import Auth from 'pages/login';
import Layout from '../components/layout/layout';

//Public routes
const publicRoutes = [
  { path: '/login', element: <Auth /> },
  { path: '*', element: <Layout /> },
];

//Private routes
const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
