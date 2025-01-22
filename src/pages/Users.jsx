import React from "react";

import TableUsers from "../Components/tables/TableUsers";
import AddUser from "../Components/forms/AddUser";

const Users = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-slate-200">
      <AddUser />
      <TableUsers />
    </div>
  );
};

export default Users;
