import React, { useState } from "react";
import { Button, Flex, Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Sidebar from "../Components/Sidebar";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import CustomerHeader from "../Components/CustomerHeader";
import MainContent from "../Components/MainContent";
import SideContent from "../Components/SideContent";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="text-black min-h-screen">
      <Layout>
        <Sider
          theme="light"
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="relative h-[100vh] left-0  bottom-0 p-4"
        >
          <Sidebar />

          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="fixed bottom-10 w-12 left-10"
          />
        </Sider>
        <Layout className="flex flex-col bg-gray-100">
          <Header
            className="bg-white"
            style={{ padding: "3rem", marginBottom: "3rem" }}
          >
            <CustomerHeader />
          </Header>
          <Content className="p-6 mt-10">
            <Flex gap="large">
              <MainContent />
              <SideContent />
            </Flex>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
