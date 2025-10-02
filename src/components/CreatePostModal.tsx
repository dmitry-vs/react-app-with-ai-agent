import React from "react";
import { Modal, Form, Input, Button, message } from "antd";
import { useTranslation } from "../hooks/useTypedTranslation";
import { useCreatePost } from "../hooks/useCreatePost";

interface CreatePostModalProps {
  visible: boolean;
  onCancel: () => void;
  userId: number;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({
  visible,
  onCancel,
  userId,
}) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const createPostMutation = useCreatePost();

  const handleSubmit = async (values: { title: string; body: string }) => {
    try {
      await createPostMutation.mutateAsync({
        title: values.title,
        body: values.body,
        userId: userId,
      });

      message.success(t("post.success"));
      form.resetFields();
      onCancel();
    } catch (error) {
      message.error(t("post.error"));
    }
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      title={t("post.create")}
      open={visible}
      onCancel={handleCancel}
      footer={null}
      width={600}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="mt-4"
      >
        <Form.Item
          name="title"
          label={t("post.title")}
          rules={[
            { required: true, message: "Please enter a title" },
            { min: 3, message: "Title must be at least 3 characters" },
          ]}
        >
          <Input placeholder="Enter post title" />
        </Form.Item>

        <Form.Item
          name="body"
          label={t("post.body")}
          rules={[
            { required: true, message: "Please enter post content" },
            { min: 10, message: "Content must be at least 10 characters" },
          ]}
        >
          <Input.TextArea
            rows={6}
            placeholder="Enter post content"
            showCount
            maxLength={500}
          />
        </Form.Item>

        <Form.Item className="mb-0">
          <div className="flex justify-end gap-2">
            <Button onClick={handleCancel}>{t("post.cancel")}</Button>
            <Button
              type="primary"
              htmlType="submit"
              loading={createPostMutation.isPending}
            >
              {t("post.submit")}
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreatePostModal;
