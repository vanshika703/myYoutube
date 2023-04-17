import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToggleMenu } from "../utils/toggleSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  function handleToggleButton() {
    dispatch(setToggleMenu());
  }

  async function getSeachSuggestions() {
    /* console.log("search", searchQuery); */
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(cacheResults({ [searchQuery]: json[1] }));
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
        /* console.log("from cache"); */
      } else {
        getSeachSuggestions();
        /* console.log("from api"); */
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-2 sticky w-full top-0 z-[60] bg-white ">
      <div className="flex col-span-4">
        <img
          onClick={handleToggleButton}
          alt="hamburger icon"
          className="h-7 m-1 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJD9Ks9HQlPD-Rpraa6krZtrX2yleg-hXwfQ&usqp=CAU"
        />
        <img
          alt="Youtube logo"
          className="h-6 m-1"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="col-span-6">
        <div>
          <input
            className="w-3/4 p-2 pl-5 border border-stone-300 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="py-3 px-4 border border-stone-300 bg-stone-100 rounded-r-full">
            <img
              alt="search symbol"
              className="h-3"
              src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
            />
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white w-1/4 p-2 mx-5 border border-gray-200 rounded-lg shadow-lg z-[90]">
            <ul>
              {suggestions.map((suggestion) => (
                <li key={suggestion} className="p-1 m-1">
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex col-span-2">
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className="h-6 w-6 mx-2"
        >
          <g class="style-scope yt-icon">
            <path
              d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className="h-6 w-6 mx-2"
        >
          <g class="style-scope yt-icon">
            <path
              d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <img
          alt="User Avatar"
          className="h-6 w-6 rounded-full mx-2"
          src="https://yt3.ggpht.com/yti/AHXOFjVTgdjtNwEngLpaMQ5NuEqhW_G-jbbVLvM17UtF=s88-c-k-c0x00ffffff-no-rj-mo"
        ></img>
      </div>
    </div>
  );
};

export default Header;
