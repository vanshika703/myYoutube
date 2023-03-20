import React from "react";

const ButtonBar = () => {
    const categories = ["All", "Mixes", "Music", "Comedy", "ReactJS", "Standup", "Cricket", "Mixes", "Mixes", "WebDev", "Travel", "Standup",]
  return (
    <div>
        {
            categories.map((category) => <button className="py-1 px-4 m-3 bg-stone-100 rounded-lg">{category}</button>)
        }
      
    </div>
  );
};

export default ButtonBar;
