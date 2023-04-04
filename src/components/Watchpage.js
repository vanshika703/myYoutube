import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const Watchpage = () => {
  const [searchParams] = useSearchParams();

  return (
    <div className="col-span-11 flex flex-col">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <CommentsContainer/>
    </div>
  );
};

export default Watchpage;
