import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContentData } from "../Hooks/useContentData";
import { getSingleUser } from "../components/api/UserApi";
import auth from "../firebase.init";
const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collaps, setCollaps] = useState(false);
  const [profile, setProfile] = useState({});
  const [user, loading, error] = useAuthState(auth);

  const { contentData, isLoading } = useContentData();


  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getSingleUser(user.email);
        setProfile(userProfile);
      
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [profile]);

console.log(profile);


  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/')
      toast("Sign Out Successful");
    }).catch((error) => {
      navigate('/')
      toast("An error happened");

    });
    
  };
  if (location?.pathname?.includes("dashboard")) {
    return;
  }

  
  return (
    <>
    <header className="bg-gray-100 hidden md:block">
  <div className="mx-auto container w-full">
    <div className="container mx-auto px-4 lg:px-12 flex justify-between items-center">
      <ul className="flex items-center space-x-5">
        <li className="text-gray-700">
          <a href={`mailto: ${contentData.email}`} className="flex items-center space-x-2">
            <span className="text-sm">
              <AiOutlineMail />
            </span>
            <span className="text-sm font-medium">
              {contentData.email}
            </span>
          </a>
        </li>
        <li className="text-gray-700">
          <a href={`tel:${contentData.phone}`} className="flex items-center space-x-2">
            <span className="text-sm">
              <AiOutlinePhone />
            </span>
            <span className="text-sm font-medium">
              {contentData.phone}
            </span>
          </a>
        </li>
      </ul>
      <ul className="flex items-center text-sm space-x-5">
        {user?.email ? (
          <>
            <li className="text-gray-700 ">
              Hey {user?.displayName || "User"}!
            </li>
            <li>
              <Link to="/redirectuser">
                <button className="bg-[#F5F2EC ] border-[#a5a5a5] border-2  text-[#a5a5a5] m-2 hover:bg-[#AE9D78] hover:text-white hover:border-white font-bold p-1 text-xs">
                  Dashboard
                </button>
              </Link>
            </li>
            <li>
              <button
                onClick={handleSignOut}
                className="bg-[#F5F2EC ] border-[#a5a5a5] border-2  text-[#a5a5a5] m-2 hover:bg-[#AE9D78] hover:text-white hover:border-white font-bold p-1 text-xs"
              >
                Sign Out
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login"> 
              <button className="bg-[#F5F2EC ] border-[#a5a5a5] border-2  text-[#a5a5a5] m-2 hover:bg-[#AE9D78] hover:text-white hover:border-white font-bold p-1 text-xs">
                  Login
                </button>
              </Link>
            </li>
            <li>
              <Link to="/sign-up">
                <button className="bg-[#F5F2EC ] border-[#a5a5a5] border-2  text-[#a5a5a5] m-2 hover:bg-[#AE9D78] hover:text-white hover:border-white font-bold p-1 text-xs">
                  Sign up
                </button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  </div>
</header>

      <nav className="relative sticky top-0 z-50">

      <div className=" bg-[#FFF]  px-8 border-b-4 border-[#e4cfc8f0]">
        <div className="text-sm">
        <div className="container mx-auto lg:xl:px-[120px] flex justify-between items-center">
          <div className="w-60">
            <Link to="/">
              <img
                src={contentData.websiteLogo}
                className="h-[50px]"
                alt="Logo" />
            </Link>
          </div>
          <div className="block xl:lg:hidden">
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
                  <Link to="/">Packages</Link>
                </li>
                <li className="text-[#fff]">
                  <Link to="/">Services</Link>
                </li>
                <li className="text-[#fff]">
                  <Link to="/">Projects</Link>
                </li>
                <li className="text-[#fff]">
                  <Link to="/about">About Me</Link>
                </li>
                
                <li className="text-[#fff]">
                  <Link to="/blog">Blog Posts</Link>
                </li>
                <li className="text-[#fff]">
                  <Link to="/">Contacts</Link>
                </li>

                {user?.email ? (
                <>
                  {/* <li>Hey {user?.displayName || "User"}!</li> */}
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
          )}
          <div className="hidden xl:lg:block">
            <ul className="flex gap-5 lg:gap-10">
            <li className="text-[#000]">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-[#000]">
                  <Link to="/packages">Packages</Link>
                </li>
                <li className="text-[#000]">
                  <Link to="/service">Services</Link>
                </li>
                <li className="text-[#000]">
                  <Link to="/projects">Projects</Link>
                </li>
                <li className="text-[#000]">
                  <Link to="/about">About Me</Link>
                </li>
                
                <li className="text-[#000]">
                  <Link to="/blog">Blog Posts</Link>
                </li>
                <li className="text-[#000]">
                  <Link to="/contact">Contacts</Link>
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
