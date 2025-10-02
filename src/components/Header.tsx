import React from "react";
import { Layout, Typography, Space } from "antd";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "../hooks/useTypedTranslation";

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AntHeader className="bg-white shadow-sm border-b border-gray-200 px-6 flex items-center justify-between">
      <Title level={3} className="!mb-0 text-gray-800">
        {t("app.title")}
      </Title>
      <Space>
        <LanguageSwitcher />
      </Space>
    </AntHeader>
  );
};

export default Header;
