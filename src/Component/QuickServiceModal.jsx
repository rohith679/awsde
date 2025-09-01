import React from "react";
import { Modal, Form, Input, Select, Button } from "antd";
const { Option } = Select;
import quickService from "../Hooks/quickService";
function QuickServiceModal({ open, onClose }) {
  const [form] = Form.useForm();
  const { createService, loading } = quickService();

  const handleFinish = async (values) => {
    const res = await createService(values);

    if (res) {
      form.resetFields();
      onClose?.();
    } else {
      message.error(res.message || "Failed to submit service request");
    }
  };

  return (
    <Modal
      title="Request Quick Service"
      open={open}
      onCancel={onClose}
      footer={null}
      destroyOnClose
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        preserve={false}
      >
        <Form.Item
          label="Full Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Enter your full name" />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            { required: true, message: "Please enter your phone number" },
          ]}
        >
          <Input placeholder="Enter your phone number" />
        </Form.Item>

        <Form.Item
          label="Service Type"
          name="serviceType"
          rules={[{ required: true, message: "Please select a service" }]}
        >
          <Select placeholder="Choose service type">
            <Option value="electrical">Electrical</Option>
            <Option value="plumbing">Plumbing</Option>
            <Option value="motor">Motor Repair</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Message" name="message">
          <Input.TextArea
            rows={3}
            placeholder="Describe your issue (optional)"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Submit Request
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default QuickServiceModal;
