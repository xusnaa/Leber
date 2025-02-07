import { Avatar, Button, Card, Divider, Flex, Tooltip, Typography } from "antd";
import React from "react";

const SellerList = () => {
  return (
    <Flex align="center" justify="space-between" gap="large">
      <Flex vertical="row" gap="small" className="flex-1">
        <Flex
          align="center"
          justify="space-between"
          className="flex items-center"
        >
          <Typography.Title
            level={5}
            style={{
              background:
                "linear-gradient(to right, #134e4a, #0f766e, #14b8a6)", // Custom teal gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Top Seller
          </Typography.Title>
          <Button type="link" className="text-slate-400">
            View All
          </Button>
        </Flex>
        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group maxCount={5} maxPopoverTrigger="click" size="large">
              <Tooltip title="User 1">
                <Avatar src="hus1.jpg" />
              </Tooltip>
              <Tooltip title="User 2">
                <Avatar src="https://api.dicebear.com/8.x/lorelei/svg?seed=johndoe" />
              </Tooltip>
              <Tooltip title="User 3">
                <Avatar src="https://api.dicebear.com/8.x/lorelei/svg?seed=johndoe" />
              </Tooltip>
              <Tooltip title="User 4">
                <Avatar src="https://api.dicebear.com/8.x/lorelei/svg?seed=johndoe" />
              </Tooltip>
              <Tooltip title="User 5">
                <Avatar src="https://api.dicebear.com/8.x/lorelei/svg?seed=johndoe" />
              </Tooltip>
              <Tooltip title="User 6">
                <Avatar src="https://api.dicebear.com/8.x/lorelei/svg?seed=johndoe" />
              </Tooltip>
              <Tooltip title="User 6">
                <Avatar src="https://api.dicebear.com/8.x/lorelei/svg?seed=johndoe" />
              </Tooltip>
            </Avatar.Group>
            <Divider
              type="vertical"
              className="bg-green-700 font-extrabold h-9"
            />
            <Flex vertical="row" className="font-extralight">
              <Typography.Text>1,200 plants Sold</Typography.Text>
              <Typography.Text>10 Sellers</Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
      <Flex></Flex>
      <Flex vertical="row" gap="small" className="flex-1">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5}>Featured Seller</Typography.Title>
          <Button type="link" className="text-slate-400">
            View All
          </Button>
        </Flex>
        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group maxCount={5} maxPopoverTrigger="click" size="large">
              <Tooltip title="User 1">
                <Avatar src="hus1.jpg" />
              </Tooltip>
              <Tooltip title="User 2">
                <Avatar src="https://api.dicebear.com/8.x/lorelei/svg?seed=johndoe" />
              </Tooltip>
              <Tooltip title="User 3">
                <Avatar src="https://api.dicebear.com/8.x/lorelei/svg?seed=johndoe" />
              </Tooltip>
              <Tooltip title="User 4">
                <Avatar src="https://api.dicebear.com/8.x/lorelei/svg?seed=johndoe" />
              </Tooltip>
              <Tooltip title="User 5">
                <Avatar src="https://api.dicebear.com/8.x/lorelei/svg?seed=johndoe" />
              </Tooltip>
              <Tooltip title="User 6">
                <Avatar src="https://api.dicebear.com/8.x/lorelei/svg?seed=johndoe" />
              </Tooltip>
              <Tooltip title="User 6">
                <Avatar src="https://api.dicebear.com/8.x/lorelei/svg?seed=johndoe" />
              </Tooltip>
            </Avatar.Group>
            <Divider
              type="vertical"
              className="bg-green-700 font-extrabold h-9"
            />
            <Flex vertical="row" className="font-extralight">
              <Typography.Text>2,000 plants Sold</Typography.Text>
              <Typography.Text>15 Sellers</Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};

export default SellerList;
