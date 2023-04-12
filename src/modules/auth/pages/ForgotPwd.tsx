import { Button, Col, Form, Input, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FlexStyled } from 'styled/common';

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
const ForgotPassWord: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    navigate('/auth/login');
  };
  return (
    <FlexStyled flexDirection="column" justifyContent="center" alignItems="center">
      <Typography.Title>ĐỔI MẬT KHẨU</Typography.Title>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
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
          label="Nhập mã"
          name="captcha"
          rules={[{ required: true, message: 'Vui lòng nhập mã!' }]}
        >
          <Row justify="space-between">
            <Col span={14}>
              <Input />
            </Col>
            <Col>
              <Button>Nhận mã</Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          name="password"
          label="Mật khẩu mới"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu mới!',
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

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Đổi mật khẩu
          </Button>
        </Form.Item>
      </Form>
    </FlexStyled>
  );
};

export default ForgotPassWord;
