import React from "react";
import ButtonBar from "./ButtonBar";
import VideoWindow from "./VideoWindow";

const Mainbar = () => {
  return <div className="col-span-11">
    <ButtonBar/>
    <VideoWindow/>
  </div>;
};

export default Mainbar;
