import React, { useState } from "react";
import { Button, Flex, Layout, Menu, Table, Dropdown, Tree, Input } from "antd";
import { Columns, data } from "../Constant";
import Sider from "antd/es/layout/Sider";
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ProfileOutlined,
  LoginOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";

const { Search } = Input;

const TableExam = () => {
  const [dataSource, setData] = useState(data);
  const [collapsed, setCollapsed] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredColumns, setFilteredColumns] = useState(Columns);

  const handleSearch = (value) => {
    setSearchValue(value);
    const filtered = Columns.map((col) => ({
      ...col,
      children: col.children
        ? col.children.filter((child) =>
            child.title.toLowerCase().includes(value.toLowerCase())
          )
        : [],
    }));
    setFilteredColumns(filtered);
  };

  const renderDropdownMenu = (column) => (
    <div style={{ padding: 8 }}>
      <Search
        placeholder="Search..."
        onSearch={handleSearch}
        style={{ marginBottom: 8 }}
      />
      <Tree
        treeData={[
          {
            title: column.title,
            key: column.key,
            children: column.children || [],
          },
        ]}
        defaultExpandAll
      />
    </div>
  );

  const columnsWithDropdown = filteredColumns.map((col) => ({
    ...col,
    title: (
      <Dropdown
        overlay={renderDropdownMenu(col)}
        trigger={["click"]}
        placement="bottomLeft"
      >
        <Button type="link">
          {col.title} <span style={{ fontSize: "12px" }}>▼</span>
        </Button>
      </Dropdown>
    ),
  }));

  return (
    <Layout className="min-h-screen">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
        className="fixed left-0 h-screen"
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={[1]}
          className="p-7 items-center"
          onClick={({ key }) => navigate(key)}
          items={[
            {
              key: "/dashboard",
              icon: <UserOutlined />,
              label: "Dashboard",
            },
            {
              key: "/orders",
              icon: <OrderedListOutlined />,
              label: "Orders",
            },
            {
              key: "/delievry",
              icon: <CarryOutOutlined />,
              label: "Delivery",
            },
            {
              key: "4",
              icon: <SettingOutlined />,
              label: "Settings",
            },
            {
              key: "5",
              icon: <ProfileOutlined />,
              label: "Profile",
            },
            {
              key: "6",
              icon: <LogoutOutlined />,
              label: "Logout",
            },
          ]}
        />
        <Button
          type="text"
          className="bottom-4 fixed"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
        />
      </Sider>
      <Content>
        <Flex vertical="row" align="center" justify="center">
          <Flex align="center" style={{ justifyContent: "center" }}>
            <Table
              dataSource={dataSource}
              columns={columnsWithDropdown}
              pagination={{ pageSize: 3 }}
            />
          </Flex>
        </Flex>
      </Content>
    </Layout>
  );
};

export default TableExam;
