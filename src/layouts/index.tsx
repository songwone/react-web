import { Divider, Layout, Menu } from "antd";
import { Button, Descriptions, Result, Avatar, Space, Statistic } from "antd";
import ProLayout, {
  PageContainer,
  SettingDrawer,
} from "@ant-design/pro-layout";
import { LikeOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const LayoutComponent = (props: any) => {
  const [pathname, setPathname] = useState("/welcome");
  return (
    <div style={{ height: "100vh" }}>
      <ProLayout
        location={{
          pathname,
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
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || "/welcome");
            }}
          >
            {dom}
          </a>
        )}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
      >
        <PageContainer
          content={<div>123</div>}
          tabList={[
            {
              tab: "基本信息",
              key: "base",
            },
            {
              tab: "详细信息",
              key: "info",
            },
          ]}
          extraContent={
            <Space size={24}>
              <Statistic
                title="Feedback"
                value={1128}
                prefix={<LikeOutlined />}
              />
              <Statistic title="Unmerged" value={93} suffix="/ 100" />
            </Space>
          }
          extra={[
            <Button key="3">操作</Button>,
            <Button key="2">操作</Button>,
            <Button key="1" type="primary">
              主操作
            </Button>,
          ]}
          footer={[
            <Button key="3">重置</Button>,
            <Button key="2" type="primary">
              提交
            </Button>,
          ]}
        ></PageContainer>
      </ProLayout>
    </div>
  );
};

export default LayoutComponent;
