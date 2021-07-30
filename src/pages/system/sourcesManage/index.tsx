/*
 * @Descripttion:
 * @version:
 * @Author: songone
 * @Date: 2021-07-28 15:42:15
 * @LastEditors: songone
 * @LastEditTime: 2021-07-30 15:54:14
 */
import { Table, Button, Space, Modal } from "antd";
import { useEffect, useState } from "react";

import EditSources from "./components/editSources";
import { getResourceList, deleteResource, IResource } from "@/api/system";

const SourcesManagePage = () => {
  const [editProps, setEditProps] = useState<{
    visible: boolean;
    detail: IResource | undefined;
    parentId: number | undefined;
  }>({
    visible: false,
    detail: undefined,
    parentId: undefined,
  });
  const [resourceList, setResourceList] = useState<IResource[]>([]);

  const getData = async () => {
    try {
      let result = await getResourceList();
      setResourceList(result.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const handleEdit = (detail?: IResource, parentId?: number) => {
    setEditProps({
      ...editProps,
      visible: true,
      detail,
      parentId,
    });
  };
  const handleDelete = async (id: number) => {
    Modal.confirm({
      title: '提示',
      content: '确定要删除该资源吗？',
      onOk: async () => {
        try {
          await deleteResource(id);
        } catch (error) {
          
        }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
    
  }


  const expandedRowRender = (record: any) => {
    const columns = [
      { title: "Name", dataIndex: "name", width: "20%", key: "name" },
      {
        title: "type_id",
        dataIndex: "type_id",
        width: "20%",
        key: "type_id",
      },
      { title: "remark", dataIndex: "remark", width: "40%", key: "remark" },
      {
        title: "操作",
        key: "handle",
        width: "20%",
        render: (record: IResource) => {
          return (
            <Space>
              <Button type="primary" onClick={() => handleEdit(record)}>
                编辑
              </Button>
              <Button
                type="primary"
                onClick={() => handleEdit(undefined, record.id)}
              >
                新增
              </Button>
              <Button type="primary" danger onClick={() => handleDelete(record.id)}>
                删除
              </Button>
            </Space>
          );
        },
      },
    ];
    return (
      <Table
        showHeader={false}
        columns={columns}
        dataSource={record.subs}
        pagination={false}
        rowKey="id"
      />
    );
  };

  const columns = [
    { title: "资源名称", width: "20%", dataIndex: "name", key: "name" },
    { title: "资源类型", width: "20%", dataIndex: "type_id", key: "type_id" },
    { title: "描述", width: "40%", dataIndex: "remark", key: "remark" },
    {
      title: "操作",
      width: "20%",
      key: "handle",
      render: (record: IResource) => {
        return (
          <Space>
            <Button type="primary" onClick={() => handleEdit(record)}>
              编辑
            </Button>
            <Button
              type="primary"
              onClick={() => handleEdit(undefined, record.id)}
            >
              新增
            </Button>
            <Button type="primary" danger onClick={() => handleDelete(record.id)}>
              删除
            </Button>
          </Space>
        );
      },
    },
  ];

  // const dataSources = [
  //   {
  //     id: 1,
  //     modify_time: 0,
  //     name: "系统配置",
  //     order_num: 1,
  //     subs: [
  //       {
  //         id: 2,
  //         modify_time: 0,
  //         name: "用户管理",
  //         order_num: 2,
  //         parent_id: 1,
  //         system_id: 1,
  //         type_id: 2,
  //         value:
  //           '{\n    "name": "Users",\n    "path": "users",\n    "component": "Users",\n    "meta": {\n        "title": "用户管理",\n        "icon": "",\n        "noCache": false,\n        "breadcrumb": true,\n        "hidden": false\n    }\n}',
  //       },
  //       {
  //         id: 3,
  //         modify_time: 0,
  //         name: "角色管理",
  //         order_num: 3,
  //         parent_id: 1,
  //         system_id: 1,
  //         type_id: 2,
  //         value:
  //           '{\n    "name": "Roles",\n    "path": "roles",\n    "component": "Roles",\n    "meta": {\n        "title": "角色管理",\n        "icon": "",\n        "noCache": false,\n        "breadcrumb": true,\n        "hidden": false\n    }\n}',
  //       },
  //       {
  //         id: 4,
  //         modify_time: 0,
  //         name: "资源管理",
  //         order_num: 4,
  //         parent_id: 1,
  //         system_id: 1,
  //         type_id: 2,
  //         value:
  //           '{\n    "name": "Resources",\n    "path": "resources",\n    "component": "Resources",\n    "meta": {\n        "title": "资源管理",\n        "icon": "",\n        "noCache": false,\n        "breadcrumb": true,\n        "hidden": false\n    }\n}',
  //       },
  //       {
  //         id: 8,
  //         modify_time: 1615517970,
  //         name: "字典管理",
  //         order_num: 4,
  //         parent_id: 1,
  //         remark: "字典的添加、编辑和删除",
  //         system_id: 1,
  //         type_id: 2,
  //         value:
  //           '{"name":"Dict","path":"dict","component":"Dict","meta":{"title":"字典管理","icon":"","noCache":false,"breadcrumb":true,"hidden":false}}',
  //       },
  //       {
  //         id: 5,
  //         modify_time: 1599034704,
  //         name: "系统管理",
  //         order_num: 5,
  //         parent_id: 1,
  //         system_id: 1,
  //         type_id: 2,
  //         value:
  //           '{\n    "name": "System",\n    "path": "system",\n    "component": "System",\n    "meta": {\n        "title": "系统管理",\n        "icon": "",\n        "noCache": true,\n        "breadcrumb": true,\n        "hidden": false\n    }\n}',
  //       },
  //       {
  //         id: 6,
  //         modify_time: 1612150834,
  //         name: "对象存储",
  //         order_num: 5,
  //         parent_id: 1,
  //         remark: "对象存储管理",
  //         system_id: 1,
  //         type_id: 2,
  //         value:
  //           '{"name":"Storage","path":"storage","component":"Storage","meta":{"title":"对象存储","icon":"","noCache":false,"breadcrumb":true,"hidden":false}}',
  //       },
  //       {
  //         id: 7,
  //         modify_time: 1612150874,
  //         name: "策略管理",
  //         order_num: 6,
  //         parent_id: 1,
  //         remark: "系统授权策略管理",
  //         system_id: 1,
  //         type_id: 2,
  //         value:
  //           '{"name":"Policy","path":"policy","component":"Policy","meta":{"title":"策略管理","icon":"","noCache":false,"breadcrumb":true,"hidden":false}}',
  //       },
  //     ],
  //     system_id: 1,
  //     type_id: 1,
  //     value:
  //       '{\n    "name": "",\n    "path": "/system",\n    "redirect": "/system/user",\n    "component": "Layout",\n    "meta": {\n        "title": "系统配置",\n        "icon": "lock",\n        "alwaysShow": true,\n        "hidden": false\n    }\n}',
  //   },
  // ];

  return (
    <div className="page-container">
      <div className="card-container">
        <div className="filter-container">
          <Space>
            <Button type="primary">新增</Button>
          </Space>
        </div>
        <Table
          columns={columns}
          dataSource={resourceList}
          expandable={{ expandedRowRender }}
          rowKey="id"
          pagination={false}
        ></Table>
        <EditSources
          {...editProps}
          onCancel={() => setEditProps({ ...editProps, visible: false })}
        ></EditSources>
      </div>
    </div>
  );
};

export default SourcesManagePage;
