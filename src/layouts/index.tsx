/*
 * @Descripttion:
 * @version:
 * @Author: songone
 * @Date: 2021-07-19 11:28:08
 * @LastEditors: songone
 * @LastEditTime: 2021-07-26 14:35:51
 */
import ProLayout, { PageContainer } from "@ant-design/pro-layout";
import { UserOutlined } from "@ant-design/icons";

import { MenuDataItem } from "@ant-design/pro-layout";
import { Link } from "react-router-dom";
import { Avatar, Menu, Dropdown } from "antd";

const menuData = [
  {
    path: "/",
    name: "123",
    children: [
      {
        path: "/welcome",
        name: "one",
        children: [
          {
            path: "/welcome/welcome",
            name: "two",
            exact: true,
          },
        ],
      },
    ],
  },
  {
    path: "/system",
    name: "系统管理",
    children: [
      {
        path: "user-manage",
        name: "用户管理",
      },
      {
        path: "role-manage",
        name: "角色管理",
      },
    ],
  },
];

const AvatarMenu = (
  <Menu>
    <Menu.Item key="center">个人中心</Menu.Item>
    <Menu.Item key="logout">退出登录</Menu.Item>
  </Menu>
);

const LayoutComponent = (props: any) => {
  return (
    <div style={{ height: "100vh" }}>
      <ProLayout
        title="人和未来License"
        menu={{
          request: async () => {
            await setTimeout(() => {}, 1500);
            return menuData;
          },
        }}
        waterMarkProps={{
          content: "Pro Layout",
        }}
        menuItemRender={(item: MenuDataItem) => {
          return <Link to={item.path || "/"}>{item.name}</Link>;
        }}
        menuFooterRender={(props) => {
          return (
            <a
              style={{
                lineHeight: "48rpx",
                display: "flex",
                height: 48,
                color: "rgba(255, 255, 255, 0.65)",
                alignItems: "center",
              }}
              href="https://preview.pro.ant.design/dashboard/analysis"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="pro-logo"
                src="https://procomponents.ant.design/favicon.ico"
                style={{
                  width: 16,
                  height: 16,
                  margin: "0 16px",
                  marginRight: 10,
                }}
              />
              {!props?.collapsed && "Preview Pro"}
            </a>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        rightContentRender={() => (
          <div>
            <Dropdown overlay={AvatarMenu}>
              <Avatar shape="square" size="small" icon={<UserOutlined />} />
            </Dropdown>
          </div>
        )}
      >
        <PageContainer title={<div></div>}>{props.children}</PageContainer>
      </ProLayout>
    </div>
  );
};

export default LayoutComponent;
