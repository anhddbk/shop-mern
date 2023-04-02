import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Image, Input, Modal, Select, Space, Typography } from 'antd';
import { authActions } from 'modules/auth/redux/authSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'redux/hook';
import {
  ContainerStyled,
  HeaderStyled,
  LoginButtonStyled,
  LoginFormStyled,
  RegisterButtonStyled,
  TitleStyled,
} from 'styled/LoginPage';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    window.location.reload();
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="87">+84</Option>
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="register-container">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        initialValues={{ prefix: '84' }}
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'Đây không phải E-mail!',
            },
            {
              required: true,
              message: 'Vui lòng nhập E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Mật khẩu"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu!',
            },
          ]}
          hasFeedback
        ></Form.Item>

        <Form.Item
          name="confirm"
          label="Nhập lại mật khẩu"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Vui lòng xác nhận mật khẩu!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The two passwords that you entered do not match!')
                );
              },
            }),
          ]}
        ></Form.Item>

        <Form.Item
          name="nickname"
          label="Tên đăng nhập"
          tooltip="Sử dụng để đăng nhập thay email và hiển thị"
          rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!', whitespace: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Số điện thoại"
          rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item label="Mã thành viên" extra="Vui lòng hỏi quản lý để lấy mã thành viên!">
          <Form.Item
            name="captcha"
            noStyle
            rules={[{ required: true, message: 'Vui lòng nhập mã thành viên' }]}
          >
            <Input />
          </Form.Item>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error('Bạn đã đọc quy định của công ty chưa?')),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            Tôi đã đọc <a href="http://www.google.com">quy định</a> của công ty
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const onFinish = (values: any) => {
  console.log('Success:', values);
  window.location.reload();
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const ForgotPassWord: React.FC = () => {
  return (
    <div className="forgot-container">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Vui lòng nhập E-mail!' }]}
        >
          <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Input />
            <Button>Gửi mã</Button>
          </Space>
        </Form.Item>

        <Form.Item
          label="Nhập mã"
          name="code"
          rules={[{ required: true, message: 'Vui lòng nhập mã!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Gửi
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

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
    navigate('/');
    console.log('Received values of form: ', values);
  };
  return (
    <div className="login-container">
      <LoginFormStyled
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
          <RegisterButtonStyled
            onClick={() => {
              setOpenForgot(true);
            }}
          >
            Quên mật khẩu?
          </RegisterButtonStyled>
        </Form.Item>
        <Form.Item>
          <LoginButtonStyled type="primary" htmlType="submit">
            Đăng nhập
          </LoginButtonStyled>
          Or
          <RegisterButtonStyled
            onClick={() => {
              setOpenRegister(true);
            }}
          >
            Đăng ký tài khoản
          </RegisterButtonStyled>
        </Form.Item>

        <Modal open={openRegister} footer={null} closable={false} centered={true}>
          <Register />
        </Modal>
        <Modal open={openForgot} footer={null} closable={false} centered={true}>
          <ForgotPassWord />
        </Modal>
      </LoginFormStyled>
    </div>
  );
};

function Auth() {
  return (
    <ContainerStyled>
      <div>
        <HeaderStyled>
          <TitleStyled>
            <Image
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              width={50}
            />
            <Typography.Title style={{ paddingLeft: 12 }}>Shop MERN</Typography.Title>
          </TitleStyled>
          <Typography.Text>My first project!</Typography.Text>
        </HeaderStyled>
        <Login />
      </div>
    </ContainerStyled>
  );
}

export default Auth;
