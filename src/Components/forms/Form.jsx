import React from "react";
import "antd/dist/reset.css";
import { Button, Form, Input, Select, Checkbox } from "antd";
import countries from "world-countries";
import Container from "../Container";

const { Option } = Select;

const FormComponent = () => {
  const [form] = Form.useForm();

  const clearEmail = () => {
    form.setFieldsValue({ email: "" });
  };

  const validateFields = () => {
    const values = form.getFieldsValue();
    let hasError = false;

    if (!/^[a-zA-Z]+$/.test(values.name || "")) {
      form.setFields([
        {
          name: "name",
          errors: ["Name must contain only letters"],
        },
      ]);
      hasError = true;
    }
    if (!/^[a-zA-Z]+$/.test(values.surname || "")) {
      form.setFields([
        {
          name: "surname",
          errors: ["Surname must contain only letters"],
        },
      ]);
      hasError = true;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email || "")) {
      form.setFields([
        {
          name: "email",
          errors: ["Please enter a valid email address"],
        },
      ]);
      hasError = true;
    } else {
      form.setFields([{ name: "email", errors: [] }]);
    }

    const age = parseInt(values.age, 10);
    if (isNaN(age) || age < 1 || age > 99) {
      form.setFields([
        {
          name: "age",
          errors: ["Age must be a number between 1 and 99"],
        },
      ]);
      hasError = true;
    }

    if (!hasError) {
      alert("Validation successful!");
    }
  };

  const generateRequestBody = () => {
    const values = form.getFieldsValue();
    console.log("Generated Request Body:", JSON.stringify(values, null, 2));
    form.resetFields();
  };

  return (
    <Container>
      <Form
        form={form}
        layout="vertical"
        className="relative shadow-md text-center h-screen sm:h-[70vh] rounded-xl"
      >
        <div className="flex sm:grid grid-cols-2 h-full gap-7">
          <div className="hidden sm:block col-span-1 bg-gray-900"></div>
          <div className="w-full sm:col-span-1">
            <h1 className="text-5xl font-extrabold pb-5">Let's Get Started</h1>
            <div className="flex items-center gap-7">
              <Form.Item label="Name" name="name">
                <Input type="text" placeholder="Enter your first name" />
              </Form.Item>
              <Form.Item label="Surname" name="surname">
                <Input type="text" placeholder="Enter your surname" />
              </Form.Item>
            </div>
            <Form.Item label="Email" name="email">
              <Input type="email" placeholder="Enter your email" />
            </Form.Item>
            <Form.Item label="Age" name="age">
              <Input type="number" placeholder="Enter your age" />
            </Form.Item>
            <Form.Item
              label="Notifications"
              name="notifications"
              valuePropName="checked"
            >
              <Checkbox>Enable Notifications</Checkbox>
            </Form.Item>
            <Form.Item label="Country" name="country">
              <Select
                placeholder="Select a country"
                style={{ width: "100%" }}
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                {countries.map((country, index) => (
                  <Option key={index} value={country.name.common}>
                    {country.name.common}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={clearEmail}
                htmlType="button"
                className="bg-gray-700 text-white w-48"
              >
                Clear Email
              </Button>
              <Button
                onClick={validateFields}
                htmlType="button"
                className="bg-gray-700 text-white w-48"
              >
                Validation
              </Button>
              <Button
                onClick={generateRequestBody}
                htmlType="button"
                className="bg-gray-700 text-white w-48"
              >
                Generate Request
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </Container>
  );
};

export default FormComponent;
