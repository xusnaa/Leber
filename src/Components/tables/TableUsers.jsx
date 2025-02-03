import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Table, Space, Button, message } from "antd";
import React from "react";
import { Listusers, DeleteUser } from "../../api/users";

const TableUsers = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: Listusers,
    staleTime: 5000,
    cacheTime: 10000,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // const deleteUserMutation = useMutation(DeleteUser, {
  //   onSuccess: () => {
  //     message.success("User deleted successfully!");
  //     queryClient.invalidateQueries(["users"]); // Refresh user list
  //   },
  //   onError: (error) => {
  //     message.error(`Failed to delete user: ${error.message}`);
  //   },
  // });

  // const handleDelete = (id) => {
  //   deleteUserMutation.mutate(id);
  // };

  return (
    <div className="p-8">
      <Table dataSource={users} rowKey="_id" pagination={{ pageSize: 5 }}>
        <Table.Column title="Name" dataIndex="name" key="name" />
        <Table.Column title="Email" dataIndex="email" key="email" />
        <Table.Column title="Phone" dataIndex="phone" key="phone" />
        <Table.Column
          title="Actions"
          key="actions"
          render={(_, record) => (
            <Space size="middle">
              <Button
                type="primary"
                onClick={() => navigate(`/user/${record._id}`)}
                className="bg-gray-700 text-white"
              >
                Read
              </Button>
              <Button
                type="default"
                onClick={() => navigate(`/user/${record._id}`)}
                className="bg-gray-700 text-white"
              >
                Edit
              </Button>
              <Button
                type="default"
                onClick={() => navigate(`/user/${record._id}`)}
                className="bg-gray-700 text-white"
              >
                Delete
              </Button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default TableUsers;
