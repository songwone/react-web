/*
 * @Descripttion: 
 * @version: 
 * @Author: songone
 * @Date: 2021-07-15 08:48:28
 * @LastEditors: songone
 * @LastEditTime: 2021-07-28 14:52:06
 */
import "./index.scss";
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Form, Input, Button } from "antd";

import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { fetchLogin } from "@/store/actions/user"; 
import MD5 from "@/utils/md5";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogin = async (values: any) => {
    const { username, password } = values;
    let pwd = new MD5().hex_md5(password);
    try {
      await dispatch(fetchLogin({
        name: username,
        password: pwd
      }))
      history.replace('/');
    } catch (error) {
      
    }
  }

  return (
    <div>
      <div className="login-wrap">
        <h2 className="login-title">License系统登录</h2>
        <Form size="large" onFinish={handleLogin}>
          <Form.Item name="username">
            <Input prefix={<UserOutlined></UserOutlined>} placeholder="账号"></Input>
          </Form.Item>
          <Form.Item name="password">
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
