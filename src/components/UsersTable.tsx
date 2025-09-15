import React, { useState, useEffect } from "react";
import { Table, Card, Spin, Alert, Typography, Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import type { User } from "../types/user";

const { Title } = Typography;

const UsersTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/users");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: User[] = await response.json();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns: ColumnsType<User> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 60,
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Name",
      key: "name",
      width: 200,
      render: (_, record) => `${record.firstname} ${record.lastname}`,
      sorter: (a, b) =>
        `${a.firstname} ${a.lastname}`.localeCompare(
          `${b.firstname} ${b.lastname}`
        ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 250,
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: 150,
    },
    {
      title: "City",
      dataIndex: ["address", "city"],
      key: "city",
      width: 120,
      sorter: (a, b) => a.address.city.localeCompare(b.address.city),
    },
    {
      title: "Company",
      dataIndex: ["company", "name"],
      key: "company",
      width: 200,
      sorter: (a, b) => a.company.name.localeCompare(b.company.name),
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website",
      width: 200,
      render: (website) => (
        <a
          href={`https://${website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {website}
        </a>
      ),
    },
  ];

  if (error) {
    return (
      <Card className="mt-6">
        <Alert
          message="Error Loading Users"
          description={error}
          type="error"
          showIcon
        />
      </Card>
    );
  }

  return (
    <Card className="mt-6 shadow-lg border-2 border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <Title level={2} className="mb-0 !font-raleway">
          Users from JSONPlaceholder
        </Title>
        <Button
          type="primary"
          icon={<ReloadOutlined />}
          onClick={fetchUsers}
          loading={loading}
        >
          Reload Users
        </Button>
      </div>
      <Spin spinning={loading} tip="Loading users...">
        <Table
          columns={columns}
          dataSource={users}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} users`,
          }}
          scroll={{ x: 1200 }}
          size="middle"
        />
      </Spin>
    </Card>
  );
};

export default UsersTable;
