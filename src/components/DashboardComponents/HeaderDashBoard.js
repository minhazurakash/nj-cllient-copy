import React from "react";
import { Link } from "react-router-dom";

const HeaderDashBoard = ({ title, src }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl">{title}</h1>
        <Link
          to={src}
          className="flex px-5 py-2 justify-center border border-1 border-green-500 items-center hover:text-white hover:bg-green-500"
        >
          Create New {title}
        </Link>
      </div>
    </>
  );
};

export default HeaderDashBoard;
