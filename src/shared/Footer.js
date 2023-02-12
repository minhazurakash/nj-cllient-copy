import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-5">
      <div className="border-y-2">
        {/* <div className="py-5 border-y-2">
          <div className="container mx-auto px-4">
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
        </div> */}
        <div className="border-b-2">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
            <div className="grid grid-cols-1 items-center uppercase md:border-r-2 py-5 md:py-0">
            <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                        
            <div className="grid md:xl:lg:grid-cols-2 grid-cols-1">
            <div>
              <ul className="leading-loose">
                {/* <li><span className="footer-title">Services</span> </li> */}
                <li className="text-[#000]">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-[#000]">
                  <Link to="/">Our Projects</Link>
                </li>
                <li className="text-[#000]">
                  <Link to="/aboutme">About Me</Link>
                </li>
                <li className="text-[#000]">
                  <Link to="/">Our Packages</Link>
                </li>
                <li className="text-[#000]">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="text-[#000]">
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
    

  </div> 
  <div>
  <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                +44 1234567890
                            </div>
                        </div>

                        <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                info@acme.org
                            </div>
                        </div>
  </div>
  </div> 

                  
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
