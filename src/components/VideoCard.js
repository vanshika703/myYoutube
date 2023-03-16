import React from "react";

const VideoCard = ({ info }) => {
  console.log("info", info);

  const { snippet, statistics } = info;
  return (
    <div className="w-80 m-3 p-3">
      <img
        alt="thumbnail"
        className="rounded-lg"
        src={snippet?.thumbnails?.medium.url}
      ></img>
      <p className="font-medium">{snippet?.title}</p>
      <p className="text-sm">{snippet?.channelTitle}</p>
      <p className="text-sm">{statistics?.viewCount} views</p>
    </div>
  );
};

export default VideoCard;
