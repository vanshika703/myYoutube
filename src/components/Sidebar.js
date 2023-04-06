import { sidebarItems } from "../utils/constants";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.toggle.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="col-span-1 text-left m-2 p-2">
      <ul className="my-4">
        {sidebarItems &&
          sidebarItems.map((sidebarItem, index) => (
            <li key={index} className="p-2">
              <div className="flex items-center">
                <img
                  alt={sidebarItem.title}
                  className="h-5 m-1"
                  src={sidebarItem.icon}
                />
                <p>{sidebarItem.title}</p>
              </div>
            </li>
          ))}
      </ul>
      <hr></hr>
    </div>
  );
};

export default Sidebar;
