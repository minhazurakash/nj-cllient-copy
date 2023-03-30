import React, { useState } from "react";

const TabPane = ({ tabs, defaultActiveIndex, children }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex || 0);

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-1/4">
        <nav className="flex flex-col bg-gray-100">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`p-4 font-medium ${
                activeIndex === index ? "bg-gray-200" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      <div className="w-full lg:w-3/4 p-4">{children[activeIndex]}</div>
    </div>
  );
};

export default TabPane;
