import React from "react";
import Mainbar from "./Mainbar";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      <Mainbar />
    </div>
  );
};

export default Body;
