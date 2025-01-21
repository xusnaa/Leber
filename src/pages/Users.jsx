import React from "react";
import Userform from "../Components/forms/Userform";
import TableUsers from "../Components/tables/TableUsers";

const Users = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-slate-200">
      <Userform
      // initialValues={{
      //   name: "John Doe",
      //   email: "john@example.com",
      //   phone: "1234567890",
      // }}
      // onFinish={(values) => {
      //   console.log("Form submitted:", values);
      // }}
      />

      <TableUsers />
    </div>
  );
};

export default Users;
