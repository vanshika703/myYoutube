import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";

const VideoWindow = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  async function fetchVideos() {
    const data = await fetch(YOUTUBE_VIDEOS_URL);
    const json = await data?.json();

    setVideos(json?.items);
  }
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoWindow;
