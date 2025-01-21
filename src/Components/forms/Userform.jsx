import { Input, Form, Button } from "antd";
import React, { useEffect, useState } from "react";

const Userform = ({ onFinish: handleSubmit, initialValues }) => {
  const [form] = Form.useForm();

  const [user, setUser] = useState({
    name: initialValues?.name || "",
    email: initialValues?.email || "",
    phone: initialValues?.phone || "",
  });

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues, form]);

  const handleFormSubmit = (values) => {
    console.log("Submitted values:", values);
    if (handleSubmit) {
      handleSubmit(values);
    }
  };

  return (
    <>
      <div className="p-7 flex items-center justify-center h-screen">
        <div className="bg-white p-7 rounded-lg shadow-md text-black w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">User Form</h2>
          <Form form={form} onFinish={handleFormSubmit} initialValues={user}>
            <Form.Item label="Name" name="name">
              <Input placeholder="Enter your name" />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input placeholder="Enter your phone" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className="bg-gray-700 text-white w-48">
                Add user
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Userform;
