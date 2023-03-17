import React from "react";
import { useSearchParams } from "react-router-dom";

const Watchpage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  return (
    <div className="col-span-11">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watchpage;
