import React, { useEffect, useState } from "react";
import Tablecomponent from "../Components/tables/TableComponent";
import Navbar from "../Components/navbar/Navbar";

const Tables = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex items-center justify-center ">
        <Tablecomponent />
      </div>
    </div>
  );
};

export default Tables;
