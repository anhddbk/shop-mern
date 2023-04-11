import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Checkbox, Form, Input, Typography } from 'antd';
import { authActions } from 'modules/auth/redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'redux/hook';
import { ButtonStyled } from 'styled/Button.styled';
import { FormStyled } from 'styled/Form.styled';

const Login: React.FC = () => {
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
    <>
      <Typography.Title>ĐĂNG NHẬP</Typography.Title>
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
            border="none"
            background="none"
            color="#1677ff"
            onClick={() => {
              navigate('/auth/forgotpassword');
            }}
          >
            Quên mật khẩu?
          </ButtonStyled>
        </Form.Item>
        <Form.Item>
          <ButtonStyled type="primary" htmlType="submit" width={100}>
            Đăng nhập
          </ButtonStyled>
          Or
          <ButtonStyled
            border="none"
            background="none"
            color="#1677ff"
            onClick={() => {
              navigate('/auth/register');
            }}
          >
            Đăng ký tài khoản
          </ButtonStyled>
        </Form.Item>
      </FormStyled>
    </>
  );
};

export default Login;
