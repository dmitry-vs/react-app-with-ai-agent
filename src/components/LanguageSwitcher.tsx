import React from "react";
import { Button, Dropdown, Space } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useTranslation } from "../hooks/useTypedTranslation";

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const items: MenuProps["items"] = [
    {
      key: "en",
      label: t("language.english"),
      onClick: () => handleLanguageChange("en"),
    },
    {
      key: "ru",
      label: t("language.russian"),
      onClick: () => handleLanguageChange("ru"),
    },
  ];

  const currentLanguage = i18n.language === "ru" ? "ru" : "en";

  return (
    <Dropdown menu={{ items }} placement="bottomRight">
      <Button type="text" icon={<GlobalOutlined />}>
        <Space>{currentLanguage === "ru" ? "Русский" : "English"}</Space>
      </Button>
    </Dropdown>
  );
};

export default LanguageSwitcher;
