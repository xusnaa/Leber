import { Flex } from "antd";
import React from "react";
import Banner from "./Banner";
import ProductList from "./ProductList";
import SellerList from "./SellerList";

const MainContent = () => {
  return (
    <div className="flex-1 ">
      <Flex vertical gap="2rem">
        <Banner />
        <ProductList />
        <SellerList />
      </Flex>
    </div>
  );
};

export default MainContent;
