import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import auth from "../firebase.init";

const Navigation = () => {
  const location = useLocation();
  const [collaps, setCollaps] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  if (location?.pathname?.includes("dashboard")) {
    return;
  }

  return (
    <>
    <header>
        <div className="bg-[#FBF8F5] py-3 container">
          <div className="container mx-auto px-10 flex justify-between">
            <ul className="flex items-center gap-5">
              <li className="text-black">
                <a href="mailto:info@websitesprofessional.com" className="flex items-stretch">
                  <div className="flex-auto text-xl p-0.5">
                    <AiOutlineMail />
                  </div>
                  <div className="flex-auto text-base ">
                    info@websitesprofessional.com
                  </div>
                </a>
              </li>
              <li className="text-black">
                <a href="tel:704-891-4329" className="flex items-stretch">
                  <div className="flex-auto text-xl p-0.5">
                    <AiOutlinePhone />
                  </div>
                  <div className="flex-auto text-base ">
                    704-891-4329
                  </div>

                </a>
              </li>
            </ul>
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
      </header>
      <nav className="relative sticky top-0 z-10 ">

      <div className=" bg-[#FFF]  px-8">
        <div className="border-b-4 border-[#e4cfc8f0]">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="w-60">
            <Link to="/">
              <img
                src="logo.png"
                alt="Logo" />
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
                  <Link to="/">Our Packages</Link>
                </li>
                <li className="text-[#fff]">
                  <Link to="/">Our Service</Link>
                </li>
                <li className="text-[#fff]">
                  <Link to="/">Our Projects</Link>
                </li>
                <li className="text-[#fff]">
                  <Link to="/about">About Me</Link>
                </li>
                
                <li className="text-[#fff]">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="text-[#fff]">
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
            </div>
          )}
          <div className="hidden md:block">
            <ul className="flex gap-5 lg:gap-10">
            <li className="text-[#000]">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-[#000]">
                  <Link to="/">Our Packages</Link>
                </li>
                <li className="text-[#000]">
                  <Link to="/service">Our Service</Link>
                </li>
                <li className="text-[#000]">
                  <Link to="/">Our Projects</Link>
                </li>
                <li className="text-[#000]">
                  <Link to="/about">About Me</Link>
                </li>
                
                <li className="text-[#000]">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="text-[#000]">
                  <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
          </div>
        </div>
        </div>
        
      </div>

    </nav></>
  );
};

export default Navigation;
