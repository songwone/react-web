/*
 * @Descripttion:
 * @version:
 * @Author: songone
 * @Date: 2021-07-23 14:47:49
 * @LastEditors: songone
 * @LastEditTime: 2021-08-18 11:34:43
 */

import { Table, Button } from "antd";
import { useState } from "react";

import EditUser from "./components/editUser";

import { IModifyData, getUserList } from "./service";

const userManage = () => {
  const [editProps, setEditProps] = useState({
    visible: false,
    id: 0,
  });

  const columns = [
    { title: "id", dataIndex: "id" },
    { title: "用户名", dataIndex: "name" },
    { title: "手机号", dataIndex: "phone" },
    { title: "邮箱", dataIndex: "email" },
    { title: "用户状态", dataIndex: "status" },
    { title: "创建时间", dataIndex: "create_time" },
  ];
  return (
    <div className="page-container">
      <div className="card-container">
        <div className="filter-container">
          <Button>新增</Button>
        </div>
        <Table columns={columns} bordered></Table>
        <EditUser {...editProps}></EditUser>
      </div>
    </div>
  );
};

export default userManage;
