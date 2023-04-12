

const VideoCard = ({ info }) => {
  

  const { snippet, statistics } = info;
  console.log(snippet)
  return (
    <div className="m-2 p-2">
      <img
        alt="thumbnail"
        className="rounded-lg w-[360px]"
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
            {Math.trunc((statistics?.viewCount)/1000)}K views
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
