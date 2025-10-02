import React from "react";
import { Drawer, Typography, Spin, Alert, Tag } from "antd";
import { useTranslation } from "../hooks/useTypedTranslation";
import type { Post } from "../types/post";

const { Title, Paragraph } = Typography;

interface PostDrawerProps {
  visible: boolean;
  onClose: () => void;
  post: Post | null;
  loading?: boolean;
}

const PostDrawer: React.FC<PostDrawerProps> = ({
  visible,
  onClose,
  post,
  loading = false,
}) => {
  const { t } = useTranslation();

  return (
    <Drawer
      title={post?.title || t("post.title")}
      placement="right"
      size="large"
      onClose={onClose}
      open={visible}
      className="post-drawer"
    >
      <Spin spinning={loading}>
        {post ? (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Tag color="blue">
                {t("post.userId")}: {post.userId}
              </Tag>
              {post.id && (
                <Tag color="green">
                  {t("post.id")}: {post.id}
                </Tag>
              )}
            </div>

            <div>
              <Title level={4} className="!mb-2">
                {t("post.title")}
              </Title>
              <Paragraph className="text-lg">{post.title}</Paragraph>
            </div>

            <div>
              <Title level={4} className="!mb-2">
                {t("post.body")}
              </Title>
              <Paragraph className="whitespace-pre-wrap">{post.body}</Paragraph>
            </div>
          </div>
        ) : (
          <Alert message={t("post.notFound")} type="warning" showIcon />
        )}
      </Spin>
    </Drawer>
  );
};

export default PostDrawer;
