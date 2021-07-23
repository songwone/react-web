import { Button, Avatar, Divider } from "antd";
import ProLayout, { PageContainer } from "@ant-design/pro-layout";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";

const menuData = [
  {
    path: "/",
    name: "welcome",
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
        name: "用户管理"
      },
      {
        path: "role-manage",
        name: "角色管理"
      },
    ],
  },
];

const LayoutComponent = (props: any) => {
  return (
    <div style={{ height: "100vh" }}>
      <ProLayout
        menu={{
          request: async () => {
            await setTimeout(() => {}, 1500);
            return menuData;
          },
        }}
        waterMarkProps={{
          content: "Pro Layout",
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
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
      >
        <PageContainer title={<div></div>}>{props.children}</PageContainer>
      </ProLayout>
    </div>
  );
};

export default LayoutComponent;
