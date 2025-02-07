import { Avatar, Card, Flex, Image, Typography } from "antd";
import React from "react";
import { ActivityInfo } from "./Constant";

const SideContent = () => {
  return (
    <Flex vertical="row" align="" className=" p-4">
      <Card className="relative bg-gradient-to-r from-teal-900 via-teal-700 to-teal-500 w-[500px] h-auto p-4">
        <div className="">
          <Typography.Title
            level={2}
            style={{ color: "white", fontSize: "2rem" }}
          >
            Today <br /> 10 orders
          </Typography.Title>
          <Typography.Title
            level={2}
            style={{ color: "white", fontSize: "2rem" }}
          >
            This month <br /> 150 orders
          </Typography.Title>
          <Image
            src="/plant4.png"
            className="absolute left-72 bottom-24"
            height="auto"
            width={200}
          />
        </div>
      </Card>

      <Flex vertical="row" align="" style={{ padding: "5rem" }}></Flex>
      <Flex justify="space-between">
        <Typography.Title
          level={2}
          style={{
            background: "linear-gradient(to right, #134e4a, #0f766e, #14b8a6)", // Custom teal gradient
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Recent activities
        </Typography.Title>
        <Typography.Text className="font-extralight">View all</Typography.Text>
      </Flex>
      <Flex vertical="row" align="" className="p-4">
        {ActivityInfo.map((item) => (
          <Flex align="" justify="space-between" key={item.id} className="p-4">
            <Flex justify="" className="gap-4">
              <Avatar src={item.image} />
              <Typography.Text className="font-bold">
                {item.name}
              </Typography.Text>
            </Flex>
            <Typography.Text className="font-extralight">
              {item.day}
            </Typography.Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default SideContent;
