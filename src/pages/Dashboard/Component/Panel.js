import React from 'react';
import { Link } from 'react-router-dom';

const Panel = () => {


  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500   p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-navy-700 text-center text-5xl">
            Users Dashboard
          </h1>

        </div>
        <div className="grid grid-cols-1 gap-4 px-2 w-full">
          <Link to="user-oders">
            <div className="flex flex-col items-center text-center p-10 bg-[#fcf9f4] ">
              <p className="text-3xl text-gray-600">My Oders</p>
            </div>
          </Link>
          <Link to="user-profile">
            <div className="flex flex-col items-center text-center p-10 bg-[#fcf9f4] ">
              <p className="text-3xl text-gray-600">Update Profile</p>
            </div>
          </Link>
          <Link to="user-password">
            <div className="flex flex-col items-center text-center p-10 bg-[#fcf9f4] ">
              <p className="text-3xl text-gray-600">Update Password</p>
            </div>
          </Link>

        </div>
      </div>
      <p className="font-normal text-navy-700 mt-20 mx-auto w-max">
        Profile Card component from{" "}
        <a
          href="https://horizon-ui.com?ref=tailwindcomponents.com"
          target="_blank"
          className="text-brand-500 font-bold" rel="noreferrer"
        >
          Horizon UI Tailwind React
        </a>
      </p>
    </div>

  );
};

export default Panel;
