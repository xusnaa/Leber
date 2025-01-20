import { Image } from "antd";
import React from "react";

const Logo = () => {
  return (
    <div className="p-4">
      <Image src="/logo.png" width={150} height={200} alt="logo" />
    </div>
  );
};

export default Logo;
