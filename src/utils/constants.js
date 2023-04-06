const API_KEY = "AIzaSyBIHN9ET6q7FaXQI10i1gfEQygNo-5t6_Q";

export const YOUTUBE_VIDEOS_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const sidebarItems = [
  {
    title: "Home",
    icon: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
    link: "/",
  },
  {
    title: "Shorts",
    icon: "https://cdn-icons-png.flaticon.com/512/2898/2898856.png",
    link: "/",
  },
  {
    title: "Subscriptions",
    icon: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
    link: "/",
  },
  {
    title: "Library",
    icon: "https://cdn-icons-png.flaticon.com/512/2898/2898856.png",
    link: "/",
  },
  {
    title: "History",
    icon: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
    link: "/",
  },
  {
    title: "Your Videos",
    icon: "https://cdn-icons-png.flaticon.com/512/2898/2898856.png",
    link: "/",
  },
];
