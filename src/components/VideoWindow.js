import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const VideoWindow = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);

  const searchQuery = useSelector((store) => store.searchQuery.query);

  console.log(searchQuery);

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    filterVideos();
  }, [searchQuery]);

  async function fetchVideos() {
    const data = await fetch(YOUTUBE_VIDEOS_URL);
    const json = await data?.json();

    setVideos(json?.items);
  }

  function filterVideos() {
    const data = videos.filter((video) =>
      video.snippet.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredVideos(data);
    console.log("filtered videos", filteredVideos);
  }

  return (
    <div className="flex flex-wrap justify-center">
      {filteredVideos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoWindow;
