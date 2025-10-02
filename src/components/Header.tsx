import React from "react";
import { Layout, Typography, Space } from "antd";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTranslation } from "../hooks/useTypedTranslation";

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AntHeader className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 flex items-center justify-between">
      <Title level={3} className="!mb-0 text-gray-800 dark:text-gray-100">
        {t("app.title")}
      </Title>
      <Space>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </Space>
    </AntHeader>
  );
};

export default Header;
