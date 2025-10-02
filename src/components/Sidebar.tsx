import React, { useState } from "react";
import { Layout, Menu, Typography } from "antd";
import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { useTranslation } from "../hooks/useTypedTranslation";

const { Sider } = Layout;
const { Title } = Typography;

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      key: "users",
      icon: <UserOutlined />,
      label: t("sidebar.users"),
    },
  ];

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-sm"
      width={250}
      collapsedWidth={80}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        {!collapsed && (
          <Title level={4} className="!mb-0 text-gray-800 dark:text-gray-100">
            {t("sidebar.title")}
          </Title>
        )}
        <div
          className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["users"]}
        items={menuItems}
        className="border-none bg-transparent"
        style={{ height: "calc(100vh - 80px)" }}
      />
    </Sider>
  );
};

export default Sidebar;
