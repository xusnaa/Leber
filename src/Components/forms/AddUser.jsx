import React from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";
import Userform from "./Userform";
import { CreateUsers } from "../../api/users";

const AddUser = () => {
  const queryClient = useQueryClient();
  const createMutation = useMutation({
    mutationFn: CreateUsers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Users"] });
      console.log("success");
    },
  });
  const handleAdd = (user) => {
    if (!user.name || !user.email || !user.phone) {
      console.error("Please fill all fields before submitting.");
      return;
    }
    createMutation.mutate({
      id: uuidv4(),
      ...user,
    });
    console.log(user);
  };

  return (
    <div>
      hi
      <Userform onFinish={handleAdd} initialValues={{}} />
    </div>
  );
};

export default AddUser;
