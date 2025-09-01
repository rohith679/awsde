"use client";

import React, { useState } from "react";
import { Table, Button, Space, Modal, message, Spin } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import contactHook from "../../../../Hooks/useContact"; // 🔹 you'll create similar to quickService

function ContactTable() {
  const { contacts, loading, error, deleteContact, fetchContacts } =
    contactHook();

  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [viewingContact, setViewingContact] = useState(null);

  // ✅ Table Columns
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          {/* 👁 View */}
          <Button
            icon={<EyeOutlined />}
            onClick={() => {
              setViewingContact(record);
              setViewModalVisible(true);
            }}
          />
          {/* 🗑 Delete */}
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={async () => {
              await deleteContact(record._id);
              message.success("Contact deleted!");
              fetchContacts(); // refresh from API
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
          dataSource={contacts}
          rowKey="_id"
          pagination={{ pageSize: 5 }}
        />
      )}

      {/* 👁 View Modal */}
      <Modal
        title="Contact Details"
        open={viewModalVisible}
        onCancel={() => setViewModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setViewModalVisible(false)}>
            Close
          </Button>,
        ]}
      >
        {viewingContact && (
          <div>
            <p>
              <b>Name:</b> {viewingContact.name}
            </p>
            <p>
              <b>Email:</b> {viewingContact.email}
            </p>

            <p>
              <b>Message:</b> {viewingContact.message}
            </p>
            <p>
              <b>Date:</b> {new Date(viewingContact.createdAt).toLocaleString()}
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}

export default ContactTable;
