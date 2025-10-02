import React from "react";
import { Layout, Typography, Space } from "antd";
import { GithubOutlined, HeartOutlined } from "@ant-design/icons";
import { useTranslation } from "../hooks/useTypedTranslation";

const { Footer: AntFooter } = Layout;
const { Text, Link } = Typography;

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AntFooter className="bg-white border-t border-gray-200 text-center py-4">
      <Space direction="vertical" size="small">
        <Text type="secondary" className="text-sm">
          {t("footer.madeWith")} <HeartOutlined className="text-red-500" />{" "}
          {t("footer.using")}
        </Text>
        <Space size="middle">
          <Link
            href="https://ant.design/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600"
          >
            Ant Design
          </Link>
          <Text type="secondary">•</Text>
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600"
          >
            Tailwind CSS
          </Link>
          <Text type="secondary">•</Text>
          <Link
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600"
          >
            React
          </Link>
        </Space>
        <Text type="secondary" className="text-xs">
          {t("footer.dataSource")}
        </Text>
      </Space>
    </AntFooter>
  );
};

export default Footer;
