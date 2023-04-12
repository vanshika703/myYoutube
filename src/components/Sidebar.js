// import { sidebarItems } from "../utils/constants";
import { useSelector } from "react-redux";
import { ReactComponent as Home } from "../utils/img/home.svg";

const sidebarItems = [
  {
    title: "Home",
    icon: Home,
    link: "/",
  },
  {
    title: "Shorts",
    icon: Home,
    link: "/",
  },
];

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.toggle.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="flex flex-col w-2/12 text-left m-2 p-2 h-screen">
      <ul className="my-4">
        {sidebarItems &&
          sidebarItems.map((sidebarItem, index) => (
            <li key={index} className="p-2">
              <div className="flex items-center">
                <sidebarItem.icon/>
                <p className="text-sm">{sidebarItem.title}</p>
                <hr className={index % 3 === 0 ? "block" : "hidden"}></hr>
              </div>
            </li>
          ))}
      </ul>
      <hr></hr>
    </div>
  );
};

export default Sidebar;
