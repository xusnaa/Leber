import { Button, Card, Flex, Image, Typography } from "antd";
import React from "react";
import { PlantsInfo } from "./Constant";

const ProductList = () => {
  const { Meta } = Card;
  return (
    <div className="mt-10 pt-4">
      <Flex align="center" justify="space-between">
        <Typography.Title
          level={2}
          justify="center"
          style={{
            background: "linear-gradient(to right, #134e4a, #0f766e, #14b8a6)", // Custom teal gradient
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          My Listing{" "}
        </Typography.Title>
        <Button type="link" className="text-slate-400">
          View More
        </Button>
      </Flex>
      <Flex align="center" gap="large">
        {PlantsInfo.map((plant) => (
          <Card key={plant.id} className="bg-white rounded-lg">
            <Image
              src={plant.image}
              style={{ width: "300px", height: "250px" }}
            />
            <Meta title={plant.name} className="mt-4" />
          </Card>
        ))}
      </Flex>
    </div>
  );
};

export default ProductList;
