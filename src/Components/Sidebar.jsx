import { useNavigate } from "react-router-dom";
import { Flex, Menu } from "antd";
import { FaLeaf } from "react-icons/fa6";
import {
  UserOutlined,
  ProfileOutlined,
  LoginOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import React from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex align="center" justify="center">
        <div className="m-10 font-extrabold p-6 ">
          <FaLeaf />
        </div>
      </Flex>
      <Menu
        mode="inline"
        defaultSelectedKeys={[1]}
        className="flex flex-col gap-7 text-lg"
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
    </>
  );
};

export default Sidebar;
