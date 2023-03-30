import { Button, Form, Input, Space } from 'antd';

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

export default ForgotPassWord;
