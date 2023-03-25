import Dashboard from 'pages/Dashboard/Dashboard';
import LoginPage from 'pages/Authen/LoginPage';
import RegisterPage from 'pages/Authen/RegisterPage';
import ForgotPassWordPage from 'pages/Authen/ForgotPassWordPage';

//Public routes
const publicRoutes = [
  { path: '/', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/forgot', element: <ForgotPassWordPage /> },
  { path: '/dashboard', element: <Dashboard /> },
];

//Private routes
const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
