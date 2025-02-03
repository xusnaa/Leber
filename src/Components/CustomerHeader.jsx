import { Avatar, Flex, Typography } from "antd";
import Search from "antd/es/input/Search";
import React from "react";
import {
  MessageOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

const CustomerHeader = () => {
  return (
    <div className="w-full">
      <Flex align="center" justify="space-between">
        <Typography.Title level={1} type="secondary">
          Welcome back, Husna
        </Typography.Title>
        <Flex align="center" gap="3rem">
          <Search placeholder="Search Dashbaord" allowClear />
          <Flex align="center" gap="10px">
            <MessageOutlined />
            <NotificationOutlined />
            <Avatar icon={<UserOutlined />} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default CustomerHeader;
