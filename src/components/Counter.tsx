import React, { useState } from "react";
import { Card, Button, Typography, Space } from "antd";
import { PlusOutlined, MinusOutlined, ReloadOutlined } from "@ant-design/icons";
import { useTranslation } from "../hooks/useTypedTranslation";

const { Title, Text } = Typography;

const Counter: React.FC = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="max-w-md mx-auto">
      <Card
        className="shadow-lg border-0 bg-white dark:bg-gray-800"
        bodyStyle={{ padding: "2rem" }}
      >
        <div className="text-center">
          <Title level={2} className="text-gray-800 dark:text-gray-100 mb-6">
            {t("counter.title")}
          </Title>

          <div className="mb-8">
            <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              {count}
            </div>
            <Text className="text-gray-600 dark:text-gray-400">
              {t("counter.currentValue")}
            </Text>
          </div>

          <Space size="large" className="w-full justify-center">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={increment}
              size="large"
              className="bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700"
            >
              {t("counter.increment")}
            </Button>

            <Button
              icon={<MinusOutlined />}
              onClick={decrement}
              size="large"
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500"
            >
              {t("counter.decrement")}
            </Button>

            <Button
              icon={<ReloadOutlined />}
              onClick={reset}
              size="large"
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500"
            >
              {t("counter.reset")}
            </Button>
          </Space>
        </div>
      </Card>
    </div>
  );
};

export default Counter;
