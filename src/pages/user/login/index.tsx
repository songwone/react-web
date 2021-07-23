import "./index.scss";

import { Form, Input, Button } from "antd";

import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
  return (
    <div>
      <div className="login-wrap">
        <h2 className="login-title">License系统登录</h2>
        <Form size="large">
          <Form.Item>
            <Input prefix={<UserOutlined></UserOutlined>} placeholder="账号"></Input>
          </Form.Item>
          <Form.Item>
            <Input type="password" prefix={<LockOutlined />} placeholder="密码"></Input>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" block>登录</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
