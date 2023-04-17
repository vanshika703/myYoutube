import { ReactComponent as Home } from "./img/home.svg";
import { ReactComponent as Library } from "./img/library.svg";
import { ReactComponent as Shorts } from "./img/shorts.svg";
import { ReactComponent as Subscriptions } from "./img/subscriptions.svg";
import { ReactComponent as YourVideos } from "./img/yourvideos.svg";
import { ReactComponent as History } from "./img/history.svg";
import { ReactComponent as LikedVideos } from "./img/likedvideos.svg";
import { ReactComponent as WatchLater } from "./img/watchlater.svg";

const API_KEY = "AIzaSyBIHN9ET6q7FaXQI10i1gfEQygNo-5t6_Q";

export const YOUTUBE_VIDEOS_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const CATEGORIES = [
  "All",
  "Mixes",
  "Music",
  "Comedy",
  "ReactJS",
  "Standup",
  "Cricket",
  "Mixes",
  "Mixes",
  "WebDev",
  "Travel",
];

export const SIDEBARITEMS = [
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