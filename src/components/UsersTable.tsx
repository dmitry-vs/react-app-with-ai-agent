import React, { useState } from "react";
import {
  Table,
  Card,
  Spin,
  Alert,
  Typography,
  Button,
  List,
  Tag,
  message,
} from "antd";
import {
  ReloadOutlined,
  FileTextOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import type { User } from "../types/user";
import type { Post } from "../types/post";
import { useTranslation } from "../hooks/useTypedTranslation";
import { useUsers } from "../hooks/useUsers";
import { usePosts } from "../hooks/usePosts";
import { useAllPosts } from "../hooks/useAllPosts";
import { useDeletePost } from "../hooks/useDeletePost";
import PostDrawer from "./PostDrawer";

const { Title } = Typography;

const UsersTable: React.FC = () => {
  const { t } = useTranslation();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  // Use custom hook for users data
  const { data: users = [], isLoading: loading, error, refetch } = useUsers();

  // Fetch total posts count
  const { data: allPosts = [] } = useAllPosts();

  // Component for rendering posts in expanded row
  const PostsList: React.FC<{ userId: number }> = ({ userId }) => {
    const {
      data: posts = [],
      isLoading: postsLoading,
      error: postsError,
    } = usePosts(userId);

    const deletePostMutation = useDeletePost();

    const handlePostClick = (post: Post) => {
      setSelectedPost(post);
      setIsDrawerVisible(true);
    };

    const handleDeletePost = async (post: Post) => {
      try {
        if (post.id) {
          await deletePostMutation.mutateAsync(post.id);
          message.success(t("post.deleteSuccess"));
        }
      } catch (error) {
        message.error(t("post.deleteError"));
      }
    };

    if (postsLoading) {
      return <Spin size="small" tip={t("post.loadingPosts")} />;
    }

    if (postsError) {
      return <Alert message="Error loading posts" type="error" />;
    }

    if (posts.length === 0) {
      return <Alert message={t("post.noPosts")} type="info" />;
    }

    return (
      <List
        size="small"
        dataSource={posts}
        renderItem={(post) => (
          <List.Item className="hover:bg-gray-50 p-2 rounded">
            <div className="flex items-center justify-between w-full">
              <div
                className="flex-1 cursor-pointer"
                onClick={() => handlePostClick(post)}
              >
                <div className="font-medium text-sm mb-1 line-clamp-2">
                  {post.title}
                </div>
                <div className="text-gray-500 text-xs line-clamp-1">
                  {post.body}
                </div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Tag color="blue">#{post.id}</Tag>
                <FileTextOutlined
                  className="text-gray-400 cursor-pointer hover:text-blue-500"
                  onClick={() => handlePostClick(post)}
                />
                <Button
                  type="primary"
                  danger
                  size="small"
                  icon={<DeleteOutlined />}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleDeletePost(post);
                  }}
                  loading={deletePostMutation.isPending}
                >
                  {t("post.delete")}
                </Button>
              </div>
            </div>
          </List.Item>
        )}
      />
    );
  };

  const columns: ColumnsType<User> = [
    {
      title: t("table.id"),
      dataIndex: "id",
      key: "id",
      width: 60,
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: t("table.name"),
      dataIndex: "name",
      key: "name",
      width: 200,
      sorter: (a, b) =>
        `${a.firstname} ${a.lastname}`.localeCompare(
          `${b.firstname} ${b.lastname}`
        ),
    },
    {
      title: t("table.email"),
      dataIndex: "email",
      key: "email",
      width: 250,
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: t("table.phone"),
      dataIndex: "phone",
      key: "phone",
      width: 150,
    },
    {
      title: t("table.city"),
      dataIndex: ["address", "city"],
      key: "city",
      width: 120,
      sorter: (a, b) => a.address.city.localeCompare(b.address.city),
    },
    {
      title: t("table.company"),
      dataIndex: ["company", "name"],
      key: "company",
      width: 200,
      sorter: (a, b) => a.company.name.localeCompare(b.company.name),
    },
    {
      title: t("table.website"),
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
          message={t("app.error")}
          description={
            error instanceof Error ? error.message : "An error occurred"
          }
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
          {t("app.title")}
        </Title>
        <div className="flex gap-4 items-center">
          <div className="text-gray-600 text-sm">
            {t("post.totalPosts")}:{" "}
            <span className="font-semibold">{allPosts.length}</span>
          </div>
          <Button
            icon={<ReloadOutlined />}
            onClick={() => refetch()}
            loading={loading}
          >
            {t("app.reload")}
          </Button>
        </div>
      </div>
      <Spin spinning={loading} tip={t("app.loading")}>
        <Table
          columns={columns}
          dataSource={users}
          rowKey="id"
          expandable={{
            expandedRowRender: (record) => <PostsList userId={record.id} />,
            rowExpandable: () => true,
            expandRowByClick: true,
          }}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              t("table.pagination.showing", {
                start: range[0],
                end: range[1],
                total,
              }),
          }}
          scroll={{ x: 1200 }}
          size="middle"
        />
      </Spin>

      <PostDrawer
        visible={isDrawerVisible}
        onClose={() => {
          setIsDrawerVisible(false);
          setSelectedPost(null);
        }}
        post={selectedPost}
      />
    </Card>
  );
};

export default UsersTable;
