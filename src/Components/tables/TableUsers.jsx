import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Table, Space, Button, message } from "antd";
import React from "react";
import { Listusers, DeleteUser } from "../../api/users";

const TableUsers = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Fetch users data
  const {
    isLoading,
    isError,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: Listusers,
    staleTime: 5000, // Keeps data fresh for 5 seconds before refetching
    cacheTime: 10000,
  });

  // Mutation for deleting user
  const deleteMutation = useMutation(DeleteUser, {
    onSuccess: () => {
      message.success("User deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["users"] }); // Refresh users list
    },
    onError: () => {
      message.error("Failed to delete user");
    },
  });

  // Function to handle delete action
  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="p-8">
      <Table dataSource={users || []} rowKey="_id" pagination={{ pageSize: 5 }}>
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
              >
                Read
              </Button>
              <Button
                type="default"
                onClick={() => navigate(`/user/${record._id}/edit`)}
              >
                Edit
              </Button>
              <Button
                type="primary"
                danger
                onClick={() => handleDelete(record._id)}
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
