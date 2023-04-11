import ForgotPassWord from '../pages/ForgotPwd';
import Login from '../pages/Login';
import Register from '../pages/Register';

export const AuthRoutes = [
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/forgotpassword', element: <ForgotPassWord /> },
];
