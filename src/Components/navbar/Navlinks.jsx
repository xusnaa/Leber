import React from "react";

const Navlinks = () => {
  return (
    <div className="flex items-center justify-between gap-7 font-light">
      <a href="/" className="text-black">
        Forms
      </a>
      <a href="/Tables" className="text-black">
        Tables
      </a>
      <a href="/Users" className="text-black">
        Users
      </a>
    </div>
  );
};

export default Navlinks;
