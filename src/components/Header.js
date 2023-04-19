import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToggleMenu } from "../utils/toggleSlice";
import { addQuery } from "../utils/searchQuerySlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { ReactComponent as Video } from "../utils/img/video.svg";
import { ReactComponent as Bell } from "../utils/img/bell.svg";

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

  function handleSearch(){
    dispatch(addQuery(searchQuery));
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
          <button
            className="py-3 px-4 border border-stone-300 bg-stone-100 rounded-r-full"
            onClick={handleSearch}
          >
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
        <Video />
        <Bell />
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
