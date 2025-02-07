import React from "react";

import TableUsers from "../Components/tables/TableUsers";
import AddUser from "../Components/forms/AddUser";
import Navbar from "../Components/navbar/Navbar";

const Users = () => {
  return (
    <div className="flex flex-col  w-screen h-screen bg-slate-200">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <AddUser />
        <TableUsers />
      </div>
    </div>
  );
};

export default Users;
