import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Checkbox, Form, Input, Modal } from 'antd';
import { authActions } from 'modules/auth/redux/authSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'redux/hook';
import { ButtonStyled } from 'styled/LoginPage/Button.styled';
import { FormStyled } from 'styled/LoginPage/Form.styled';
import ForgotPassWord from './ForgotPwd';
import Register from './Register';

const Login: React.FC = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);
  const dispath = useAppDispatch();
  const navigate = useNavigate();
  const handleLoginClick = (values: any) => {
    dispath(
      authActions.loginStart({
        username: values.username,
        password: values.password,
      })
    );
    navigate('/');
    console.log('Received values of form: ', values);
  };
  return (
    <div className="login-container">
      <FormStyled
        maxWidth={300}
        name="normal_login"
        initialValues={{ remember: true }}
        onFinish={handleLoginClick}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Tên đăng nhập"
          />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Mật khẩu"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Ghi nhớ đăng nhập</Checkbox>
          </Form.Item>
          <ButtonStyled
            onClick={() => {
              setOpenForgot(true);
            }}
          >
            Quên mật khẩu?
          </ButtonStyled>
        </Form.Item>
        <Form.Item>
          <ButtonStyled type="primary" htmlType="submit">
            Đăng nhập
          </ButtonStyled>
          Or
          <ButtonStyled
            onClick={() => {
              setOpenRegister(true);
            }}
          >
            Đăng ký tài khoản
          </ButtonStyled>
        </Form.Item>

        <Modal open={openRegister} footer={null} closable={false} centered={true}>
          <Register />
        </Modal>
        <Modal open={openForgot} footer={null} closable={false} centered={true}>
          <ForgotPassWord />
        </Modal>
      </FormStyled>
    </div>
  );
};

export default Login;
