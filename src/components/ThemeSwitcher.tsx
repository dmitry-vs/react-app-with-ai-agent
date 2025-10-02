import React from "react";
import { Button, Tooltip } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "../hooks/useTypedTranslation";

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <Tooltip title={theme === "light" ? t("theme.dark") : t("theme.light")}>
      <Button
        type="text"
        icon={theme === "light" ? <MoonOutlined /> : <SunOutlined />}
        onClick={toggleTheme}
        className="flex items-center justify-center [&_.anticon]:text-gray-600 dark:[&_.anticon]:text-gray-300"
        aria-label={theme === "light" ? t("theme.dark") : t("theme.light")}
      />
    </Tooltip>
  );
};

export default ThemeSwitcher;
