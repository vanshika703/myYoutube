import { CATEGORIES } from "../utils/constants";

const ButtonBar = () => {

  return (
    <div className="sticky top-0 w-full bg-white z-10">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          className="py-1 px-4 m-3 bg-stone-100 rounded-lg hover:bg-stone-200"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ButtonBar;
