import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";

const Navigation = () => {
  const location = useLocation();
  const [collaps, setCollaps] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <nav className="relative">
      <div className="bg-[#FBF8F5] py-3">
        <div className="container mx-auto flex justify-end">
          <ul className="flex items-center gap-5">
            {user?.email ? (
              <>
                <li>Hey {user?.displayName || "User"}!</li>
                <li>
                  <Link to="/dashboard">
                    <button className="border border-orange-300 hover:bg-orange-300 hover:text-white py-2 px-4">
                      Dashboard
                    </button>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="border border-orange-300 hover:bg-orange-300 hover:text-white py-2 px-4"
                  >
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="">
                    Login
                  </Link>
                </li>

                <li>
                  <Link to="/sign-up" className="">
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      {location?.pathname?.includes("dashboard") || (
        <>
          <div className="py-5 bg-[#FFF79E]">
            <div className="container mx-auto flex justify-between items-center">
              <div className="w-60">
                <Link to="/">
                  <img
                    src="https://restored316.wpenginepowered.com/wp-content/uploads/2020/09/R316_horizontal.png"
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="block md:hidden">
                <button className="" onClick={() => setCollaps(!collaps)}>
                  <FaBars />
                </button>
              </div>
              {collaps && (
                <div className="absolute w-72 h-screen top-0 left-0 bg-black z-50 transition duration-700">
                  <ul className="flex flex-col p-10 gap-5">
                    <li className="text-[#fff]">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="text-[#fff]">
                      <Link to="/about">About</Link>
                    </li>
                    <li className="text-[#fff]">
                      <Link to="/">Services</Link>
                    </li>
                    <li className="text-[#fff]">
                      <Link to="/">Projects</Link>
                    </li>
                    <li className="text-[#fff]">
                      <Link to="/">Contact Us</Link>
                    </li>
                    <li className="text-[#fff]">
                      <Link to="/">Blog</Link>
                    </li>
                  </ul>
                </div>
              )}
              <div className="hidden md:block">
                <ul className="flex gap-5 lg:gap-10">
                  <li className="text-[#000000]">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="text-[#000000]">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="text-[#000000]">
                    <Link to="/">Services</Link>
                  </li>
                  <li className="text-[#000000]">
                    <Link to="/">Projects</Link>
                  </li>
                  <li className="text-[#000000]">
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li className="text-[#000000]">
                    <Link to="/">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;
