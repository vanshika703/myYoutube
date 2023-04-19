// import { sidebarItems } from "../utils/constants";
import { useSelector } from "react-redux";
import { SIDEBARITEMS } from "../utils/constants";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.toggle.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="flex flex-col w-2/12 text-left m-2">
      <ul className="my-4">
        {SIDEBARITEMS &&
          SIDEBARITEMS.map((sidebarItem, index) => (
            <li key={index} className="px-2">
              <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
                <sidebarItem.icon />
                <p className="text-sm px-4">{sidebarItem.title}</p>
                <hr className={(index + 1) % 3 === 0 ? "block" : "hidden"} />
              </div>
            </li>
          ))}
      </ul>
      <hr></hr>
    </div>
  );
};

export default Sidebar;
