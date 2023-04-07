import LoginPage from 'pages/LoginPage';
import Layout from '../pages/AdminPage';

//Public routes
const publicRoutes = [
  { path: '/login', element: <LoginPage /> },
  { path: '*', element: <Layout /> },
];

//Private routes
const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
