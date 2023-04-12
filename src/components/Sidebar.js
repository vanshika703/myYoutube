// import { sidebarItems } from "../utils/constants";
import { useSelector } from "react-redux";
import { ReactComponent as Home } from "../utils/img/home.svg";
import { ReactComponent as Library } from "../utils/img/library.svg";
import { ReactComponent as Shorts } from "../utils/img/shorts.svg";
import { ReactComponent as Subscriptions } from "../utils/img/subscriptions.svg";
import { ReactComponent as YourVideos } from "../utils/img/yourvideos.svg";
import { ReactComponent as History } from "../utils/img/history.svg";
import { ReactComponent as LikedVideos } from "../utils/img/likedvideos.svg";
import { ReactComponent as WatchLater } from "../utils/img/watchlater.svg";

const sidebarItems = [
  {
    title: "Home",
    icon: Home,
    link: "/",
  },
  {
    title: "Shorts",
    icon: Shorts,
    link: "/",
  },
  {
    title: "Subscriptions",
    icon: Subscriptions,
    link: "/",
  },
  {
    title: "Library",
    icon: Library,
    link: "/",
  },
  {
    title: "Your Videos",
    icon: YourVideos,
    link: "/",
  },
  {
    title: "History",
    icon: History,
    link: "/",
  },
  {
    title: "Liked Videos",
    icon: LikedVideos,
    link: "/",
  },
  {
    title: "Watch Later",
    icon: WatchLater,
    link: "/",
  },
  
];

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.toggle.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="flex flex-col w-2/12 text-left m-2 p-2">
      <ul className="my-4">
        {sidebarItems &&
          sidebarItems.map((sidebarItem, index) => (
            <li key={index} className="p-2">
              <div className="flex items-center">
                <sidebarItem.icon/>
                <p className="text-sm px-4">{sidebarItem.title}</p>
                <hr className={(index+1) % 3 === 0 ? "block" : "hidden"}/>
              </div>
            </li>
          ))}
      </ul>
      <hr></hr>
    </div>
  );
};

export default Sidebar;
