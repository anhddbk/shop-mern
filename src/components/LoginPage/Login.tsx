import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import '../../styled/LoginPage/Login.styled.scss';
import Register from './Register';
import { ButtonRegisterStyled } from 'styled/LoginPage/RegisterButton.styled';
import ForgotPassWord from './ForgotPassWord';
import { useAppDispatch } from 'redux/hook';
import { authActions } from 'modules/auth/redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);
  const dispath = useAppDispatch();
  const navigate = useNavigate();
  const handleLoginClick = (values: any) => {
    dispath(
      authActions.login({
        username: values.username,
        password: values.password,
      })
    );
    navigate('/dashboard');
    console.log('Received values of form: ', values);
  };

  return (
    <div className="login-container">
      <Form
        name="normal_login"
        className="login-form"
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
          <ButtonRegisterStyled
            onClick={() => {
              setOpenForgot(true);
            }}
          >
            Quên mật khẩu?
          </ButtonRegisterStyled>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Đăng nhập
          </Button>
          Or
          <ButtonRegisterStyled
            onClick={() => {
              setOpenRegister(true);
            }}
          >
            Đăng ký tài khoản
          </ButtonRegisterStyled>
        </Form.Item>

        <Modal open={openRegister} footer={null} closable={false} centered={true}>
          <Register />
        </Modal>
        <Modal open={openForgot} footer={null} closable={false} centered={true}>
          <ForgotPassWord />
        </Modal>
      </Form>
    </div>
  );
};

export default Login;
