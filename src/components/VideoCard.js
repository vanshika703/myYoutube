import React from "react";

const VideoCard = ({ info }) => {
  console.log("info", info);

  const { snippet, statistics } = info;
  return (
    <div className="w-96 m-3 p-3">
      <img
        alt="thumbnail"
        className="rounded-lg"
        src={snippet?.thumbnails?.medium.url}
      ></img>
      <div className="flex m-1">
        <img
          alt="logo"
          className="h-7 w-7 rounded-full m-1"
          src={snippet?.thumbnails?.medium.url}
        />
        <div className="w-64">
          <p className="font-medium text-stone-800 truncate my-1 overflow-hidden">
            {snippet?.title}
          </p>
          <p className="text-sm text-stone-500">{snippet?.channelTitle}</p>
          <p className="text-sm text-stone-500">
            {statistics?.viewCount} views
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
