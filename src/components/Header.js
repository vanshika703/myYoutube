import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/toggleSlice";

const Header = () => {
  const dispatch = useDispatch();
  function handleToggleButton() {
    
    dispatch(toggleMenu());
    
  }
  return (
    <div className="grid grid-flow-col my-2 p-2 shadow-md">
      <div className="flex col-span-1">
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
      <div className="col-span-10 text-center">
        <input
          className="w-3/6 p-2 border border-stone-300 rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button className="py-3 px-4 border border-stone-300 bg-stone-100 rounded-r-full">
          <img
            className="h-3"
            src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
          />
        </button>
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
