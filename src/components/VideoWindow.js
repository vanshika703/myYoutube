import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import {Link} from 'react-router-dom';
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
    <div className="flex flex-wrap justify-center">
      {videos.map((video) => (
        <Link to={"/watch?v="+video.id}><VideoCard key={video.id} info={video} /></Link>
      ))}
    </div>
  );
};

export default VideoWindow;
