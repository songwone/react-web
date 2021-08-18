/*
 * @Descripttion:
 * @version:
 * @Author: songone
 * @Date: 2021-07-29 14:15:08
 * @LastEditors: songone
 * @LastEditTime: 2021-08-18 11:32:07
 */
import { Form, Modal, Input, Checkbox, Switch } from "antd";
import { useEffect, useState } from "react";

import {
  addUser,
  modifyUser,
  IModifyData
} from "../service";

interface propsType {
  visible: boolean | undefined;
  onCancel?: any;
  onSuccess?: any;
  id?: number | undefined;
}
const EditUser = (props: propsType) => {
  const { id } = props;
  const [form] = Form.useForm();
  const roleOptions = [
    { label: '角色1', value: "123" }
  ]

  const handleSubmit = async (values: IModifyData) => {
    if (id) {
      await modifyUser(id, values);
    } else {
      await addUser(values);
    }
  };
  useEffect(() => {
    if (id) {
      
    } else {
      form.resetFields();
    }
  }, [id, form]);

  return (
    <Modal
      visible={props.visible}
      onOk={() => {
        form.submit();
      }}
      onCancel={props.onCancel}
      title="编辑用户"
    >
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item label="账号" name="name" rules={[{ required: true, message: '请输入账号' }]}>
          <Input></Input>
        </Form.Item>
        <Form.Item label="密码" name="remark" rules={[{ required: true, message: '请输入密码' }]}>
          <Input type="password"></Input>
        </Form.Item>
        <Form.Item label="手机号码" name="name" rules={[{ required: true, message: '请输入手机号' }]}>
          <Input></Input>
        </Form.Item>
        <Form.Item label="邮箱" name="name" rules={[{ required: true, message: '请输入邮箱' }]}>
          <Input></Input>
        </Form.Item>
        <Form.Item label="用户状态" name="remark">
          <Switch checkedChildren="启用" unCheckedChildren="停用"></Switch>
        </Form.Item>
        <Form.Item label="角色">
         <Checkbox.Group options={roleOptions} />
        </Form.Item>
        <Form.Item label="备注" name="remark">
          <Input.TextArea></Input.TextArea>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditUser;
