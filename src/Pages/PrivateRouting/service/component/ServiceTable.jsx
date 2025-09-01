"use client";

import React, { useState } from "react";
import {
  Table,
  Button,
  Space,
  Modal,
  Form,
  Input,
  Select,
  message,
  Spin,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import quickService from "../../../../Hooks/quickService";

const { Option } = Select;

function ServiceTable() {
  const {
    quickServices,
    loading,
    error,
    createService,
    updateService,
    deleteService,
    fetchServices,
  } = quickService();

  const [modalVisible, setModalVisible] = useState(false);
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [viewingService, setViewingService] = useState(null);
  const [form] = Form.useForm();

  // ✅ Table Columns
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Service Type", dataIndex: "serviceType", key: "serviceType" },
    { title: "Message", dataIndex: "message", key: "message" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          {/* 👁 View */}
          <Button
            icon={<EyeOutlined />}
            onClick={() => {
              setViewingService(record);
              setViewModalVisible(true);
            }}
          />
          {/* ✏️ Edit */}
          {/* <Button
            icon={<EditOutlined />}
            onClick={() => {
              setEditingService(record);
              form.setFieldsValue(record);
              setModalVisible(true);
            }}
          /> */}
          {/* 🗑 Delete */}
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={async () => {
              await deleteService(record._id);
              message.success("Service deleted!");
              fetchServices(); // refresh from API
            }}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      {/* 📋 Table */}
      {loading ? (
        <Spin />
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <Table
          columns={columns}
          dataSource={quickServices}
          rowKey="_id"
          pagination={{ pageSize: 5 }}
        />
      )}

      {/* 👁 View Modal */}
      <Modal
        title="Service Details"
        open={viewModalVisible}
        onCancel={() => setViewModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setViewModalVisible(false)}>
            Close
          </Button>,
        ]}
      >
        {viewingService && (
          <div>
            <p>
              <b>Name:</b> {viewingService.name}
            </p>
            <p>
              <b>Phone:</b> {viewingService.phone}
            </p>
            <p>
              <b>Service Type:</b> {viewingService.serviceType}
            </p>
            <p>
              <b>Message:</b> {viewingService.message}
            </p>
            <p>
              <b>Date:</b>{" "}
              {new Date(viewingService.createAt * 1000).toLocaleString()}
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}

export default ServiceTable;
