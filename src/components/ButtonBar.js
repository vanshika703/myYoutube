const ButtonBar = () => {
  const categories = [
    "All",
    "Mixes",
    "Music",
    "Comedy",
    "ReactJS",
    "Standup",
    "Cricket",
    "Mixes",
    "Mixes",
    "WebDev",
    "Travel",
  ];
  return (
    <div className="sticky top-0 w-full bg-white z-10">
      {categories.map((category) => (
        <button
          key={category}
          className="py-1 px-4 m-3 bg-stone-100 rounded-lg"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ButtonBar;
