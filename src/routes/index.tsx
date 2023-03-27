// import RegisterPage from 'pages/Authen/RegisterPage';
// import ForgotPassWordPage from 'pages/Authen/ForgotPassWordPage';
import Auth from 'components/auth';
import Dashboard from 'components/dashboard';

//Public routes
const publicRoutes = [
  { path: '/', element: <Auth /> },
  // { path: '/register', element: <RegisterPage /> },
  // { path: '/forgot', element: <ForgotPassWordPage /> },
  { path: '/dashboard', element: <Dashboard /> },
];

//Private routes
const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
