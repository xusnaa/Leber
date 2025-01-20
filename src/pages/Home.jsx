import React from "react";
import Navbar from "../Components/navbar/Navbar";
import FormComponent from "../Components/forms/Form";

const Home = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar />
      <FormComponent />
    </div>
  );
};

export default Home;
