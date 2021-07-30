/*
 * @Descripttion:
 * @version:
 * @Author: songone
 * @Date: 2021-07-29 14:15:08
 * @LastEditors: songone
 * @LastEditTime: 2021-07-30 14:39:01
 */
import { Form, Modal, Input, Radio, Divider, Select } from "antd";
import { useState } from "react";

import { addResource, editResource, IResource, IResourceForm  } from "@/api/system";

interface propsType {
  visible: boolean | undefined;
  onCancel?: any;
  onSuccess?: any;
  detail?: IResource | undefined;
  parentId?: number;
}
const EditSources = (props: propsType) => {
  const [type, setType] = useState(1);
  const [form] = Form.useForm();

  const handleSubmit = async (values: IResourceForm) => {
    if(props.detail) {
      await editResource(values)
    }else{
      await addResource(values)
    }
  }

  return (
    <Modal visible={props.visible} onOk={() => { form.submit() }} onCancel={props.onCancel}  title="编辑资源">
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item label="名称">
          <Input></Input>
        </Form.Item>
        <Form.Item label="描述">
          <Input.TextArea></Input.TextArea>
        </Form.Item>
        <Form.Item label="类型">
          <Radio.Group
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <Radio value={1} key="1">
              目录
            </Radio>
            <Radio value={2} key="2">
              菜单
            </Radio>
            <Radio value={3} key="3">
              按钮
            </Radio>
            <Radio value={4} key="4">
              接口
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="父节点">
          <Input></Input>
        </Form.Item>
        <Form.Item label="排序">
          <Input></Input>
        </Form.Item>
        <Divider></Divider>
        {type === 1 && (
          <>
            <Form.Item label="路由路径">
              <Input></Input>
            </Form.Item>
            <Form.Item label="显示名称">
              <Input></Input>
            </Form.Item>
            <Form.Item label="路由图标">
              <Input></Input>
            </Form.Item>
            <Form.Item label="是否隐藏">
              <Radio.Group>
                <Radio value="1">是</Radio>
                <Radio value="2">否</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="总是显示">
              <Radio.Group>
                <Radio value="1">是</Radio>
                <Radio value="2">否</Radio>
              </Radio.Group>
            </Form.Item>
          </>
        )}
        {type === 2 && (
          <>
            <Form.Item label="路由路径">
              <Input></Input>
            </Form.Item>
            <Form.Item label="显示名称">
              <Input></Input>
            </Form.Item>
            <Form.Item label="路由图标">
              <Input></Input>
            </Form.Item>
            <Form.Item label="是否隐藏">
              <Radio.Group>
                <Radio value="1">是</Radio>
                <Radio value="2">否</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="路由组件">
              <Select></Select>
            </Form.Item>
            <Form.Item label="显示导航">
              <Radio.Group>
                <Radio value="1">是</Radio>
                <Radio value="2">否</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="需要缓存">
              <Radio.Group>
                <Radio value="1">是</Radio>
                <Radio value="2">否</Radio>
              </Radio.Group>
            </Form.Item>
          </>
        )}
        {type === 3 && (
          <>
            <Form.Item label="按钮标识">
              <Input></Input>
            </Form.Item>
          </>
        )}
        {type === 4 && (
          <>
            <Form.Item label="权限标识">
              <Input></Input>
            </Form.Item>
          </>
        )}
      </Form>
    </Modal>
  );
};

export default EditSources;
