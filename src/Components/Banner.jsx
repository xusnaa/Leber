import { Button, Card, Flex, Typography } from "antd";
import React from "react";
import ProductList from "./ProductList";

const Banner = () => {
  return (
    <Card className="p-12">
      <Flex vertical gap="30px">
        <Flex vertical align="flex-start">
          <Typography.Title
            level={2}
            style={{
              background:
                "linear-gradient(to right, #134e4a, #0f766e, #14b8a6)", // Custom teal gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Create and Sell products
          </Typography.Title>
          <Typography.Text type="secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            voluptatum rerum hic? Error, at harum perferendis praesentium nihil
            iusto amet suscipit rem doloremque? Perspiciatis, ex. Nisi veniam
            quam modi aut?
          </Typography.Text>
        </Flex>
        <Flex gap="large">
          <Button
            type="primary"
            size="large"
            className="bg-gradient-to-r from-teal-900 via-teal-700 to-teal-500"
          >
            Explore More.
          </Button>
          <Button size="large">Top sellers</Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Banner;
