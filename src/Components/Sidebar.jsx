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
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Dashboard",
          },

          {
            key: "2",
            icon: <OrderedListOutlined />,
            label: "Orders",
          },
          {
            key: "3",
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
