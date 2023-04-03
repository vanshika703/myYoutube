
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.toggle.isMenuOpen);

  const sidebarItems = [
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

  if (!isMenuOpen) return null;

  return (
    <div className="col-span-1 text-left m-2 p-2">
      <ul className="my-4">
        {sidebarItems &&
          sidebarItems.map((sidebarItem, index) => (
            <li key={index} className="p-2">
              <div className="flex">
                <img alt="icon" className="h-5 m-1" src={sidebarItem.icon} />
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
