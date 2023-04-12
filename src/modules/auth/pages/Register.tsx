import { Button, Checkbox, Form, Input, Select, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FlexStyled } from 'styled/common';

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
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    navigate('/auth/login');
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
    <FlexStyled flexDirection="column" justifyContent="center" alignItems="center">
      <Typography.Title>ĐĂNG KÝ</Typography.Title>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        initialValues={{ prefix: '84' }}
        onFinish={onFinish}
        style={{ minWidth: 400 }}
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
        >
          <Input.Password />
        </Form.Item>

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
                return Promise.reject(new Error('Mật khẩu không khớp!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

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

        <Form.Item
          name="captcha"
          label="Mã thành viên"
          extra="Vui lòng hỏi quản lý để lấy mã thành viên!"
          rules={[{ required: true, message: 'Vui lòng nhập mã thành viên' }]}
        >
          <Input />
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
    </FlexStyled>
  );
};

export default Register;
