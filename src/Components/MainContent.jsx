import { Flex } from "antd";
import React from "react";
import Banner from "./Banner";

const MainContent = () => {
  return (
    <div className="flex-1">
      <Flex vertical gap="2rem">
        <Banner />
      </Flex>
    </div>
  );
};

export default MainContent;
