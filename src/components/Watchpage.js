
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import Livechat from "./Livechat";

const Watchpage = () => {
  const [searchParams] = useSearchParams();

  return (
    <div className="col-span-11 flex flex-col">
      <div className="flex">
        <div className="m-2 p-2">
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
        <div className="flex flex-col-reverse p-2 my-4 h-[500px] border rounded w-full bg-slate-100 overflow-y-scroll">
          <Livechat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default Watchpage;
