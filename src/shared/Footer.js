import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-5 md:px-0">
      <div className="">
        <div className="py-5 border-y-2">
          <div className="container mx-auto">
            <div className="text-center text-2xl">
              <h1>UNLOCK 10% OFF YOUR FIRST ORDER WITH US!</h1>
            </div>
            <div className="mx-auto text-center mt-5">
              <form>
                <div className="w-full sm:w-[500px] mx-auto flex gap-2">
                  <input
                    type="text"
                    placeholder="Email address"
                    className="input input-bordered rounded-none input-warning w-full"
                  />
                  <button className="btn btn-warning rounded-none w-32">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="border-b-2">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
            <div className="grid grid-cols-3 items-center uppercase md:border-r-2 py-5 md:py-0">
              <div>
                <ul className="grid gap-4">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">About</Link>
                  </li>
                  <li>
                    <Link to="/">Service</Link>
                  </li>
                  <li>
                    <Link to="/">Projects</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="grid gap-4">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">About</Link>
                  </li>
                  <li>
                    <Link to="/">Service</Link>
                  </li>
                  <li>
                    <Link to="/">Projects</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="grid gap-4">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">About</Link>
                  </li>
                  <li>
                    <Link to="/">Service</Link>
                  </li>
                  <li>
                    <Link to="/">Projects</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="m-5">
              <div className="flex flex-col justify-center items-center bg-[#FFF79E] p-10">
                <div className="text-center mb-5">
                  <h2 className="text-xl mb-4">JOIN RESTORED 316 COMMUNITY</h2>
                  <h1 className="text-2xl">
                    Join a community of like minded women and get all the
                    encouragement and help you need!
                  </h1>
                </div>
                <button>JOIN NOW ↦</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  justify-center gap-5 text-2xl py-5">
          <FaFacebook />
          <FaInstagram />
          <FaWhatsapp />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
