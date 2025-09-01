"use client";

import React, { useState } from "react";
import {
  Table,
  Button,
  Space,
  Tag,
  Modal,
  Rate,
  Form,
  Input,
  message,
} from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  EyeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import useReviews from "../../../Public/LandingPage/hooks/ReviewHooks";

function ReviewTable() {
  const { reviews, loading, error, fetchReviews, deleteReview } = useReviews();

  const [viewModal, setViewModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  // ✅ Table Columns
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Organization", dataIndex: "organization", key: "organization" },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => <Rate disabled defaultValue={rating} />,
    },
    { title: "Category", dataIndex: "category", key: "category" },

    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            icon={<EyeOutlined />}
            onClick={() => {
              setSelectedReview(record);
              setViewModal(true);
            }}
          />

          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={async () => {
              const res = await deleteReview(record._id);
              if (res.success) {
                message.success(res.message);
              } else {
                message.error(res.message);
              }
            }}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={reviews}
        rowKey="_id"
        loading={loading}
        pagination={{ pageSize: 5 }}
      />

      {/* ✅ Modal for viewing details */}
      <Modal
        title="Review Details"
        open={viewModal}
        onCancel={() => setViewModal(false)}
        footer={null}
      >
        {selectedReview && (
          <Form layout="vertical">
            <Form.Item label="Name">
              <Input value={selectedReview.name} disabled />
            </Form.Item>
            <Form.Item label="Email">
              <Input value={selectedReview.email} disabled />
            </Form.Item>
            <Form.Item label="Organization">
              <Input value={selectedReview.organization} disabled />
            </Form.Item>
            <Form.Item label="Rating">
              <Rate disabled defaultValue={selectedReview.rating} />
            </Form.Item>
            <Form.Item label="Category">
              <Input value={selectedReview.category} disabled />
            </Form.Item>
            <Form.Item label="Review">
              <Input.TextArea rows={3} value={selectedReview.review} disabled />
            </Form.Item>
            <Form.Item label="Date">
              <Input
                value={new Date(
                  selectedReview.createAt * 1000
                ).toLocaleString()}
                disabled
              />
            </Form.Item>
          </Form>
        )}
      </Modal>
    </>
  );
}

export default ReviewTable;
