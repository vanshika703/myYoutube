import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/toggleSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  function handleToggleButton() {
    dispatch(toggleMenu());
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
    <div className="grid grid-flow-col my-2 p-2 shadow-md">
      <div className="flex col-span-4">
        <img
          onClick={handleToggleButton}
          alt="logo"
          className="h-7 m-1 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJD9Ks9HQlPD-Rpraa6krZtrX2yleg-hXwfQ&usqp=CAU"
        />
        <img
          alt="logo"
          className="h-7 m-1"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="col-span-6">
        <div>
          <input
            className="w-1/2 p-2 pl-5 border border-stone-300 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="py-3 px-4 border border-stone-300 bg-stone-100 rounded-r-full">
            <img
              alt="search"
              className="h-3"
              src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
            />
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white w-1/4 p-2 mx-5 border border-gray-200 rounded-lg shadow-lg">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li key={suggestion} className="p-1 m-1">
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex col-span-1">
        <img
          alt="logo"
          className="h-7 m-1"
          src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-512.png"
        ></img>
        <img
          alt="logo"
          className="h-7 m-1"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
