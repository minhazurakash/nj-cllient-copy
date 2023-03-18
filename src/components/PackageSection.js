import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import { useOrder } from "../Hooks/useOrder";
import { usePackage } from "../Hooks/usePackage";

const PackageSection = () => {
  const [load, setLoad] = useState(false);
  const [Orders, isLoad, refetch] = useOrder();
  const [Package, isLoading, reFetch] = usePackage();
  const [user, loading, error] = useAuthState(auth);
  const userName = user?.displayName;
  const userEmail = user?.email;
  const navigate = useNavigate();

  
  const handleOrder = async (i) => {
    setLoad(true);

    if (!userName) {
      navigate("/login");
    } else {
      const packageId = i?._id;
      const packageName = i?.name;
      const packagePrice = i?.price;
      const orderDetails = {
        userName,
        userEmail,
        packageId,
        packageName,
        packagePrice,
      };

      const res = await axios.post(
        "https://api.websitesprofessional.com/api/v1/order",
        orderDetails
      );
      if (res) {
        setLoad(false);
        refetch();
        if (res.data.success) {
          toast("Package Order Successful");
        }
      }
    }
  };

  return (
<div className="bg-[#fff]">
<div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">

                <h2 className="text-dark font-title mb-4 mt-10 xl:lg:mt-20 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  Our Packages
                </h2>

              </div>
            </div>
          </div>
    <div className="px-20 grid grid-cols-1 md:grid-cols-2 gap-10 ">



      {Package?.data?.slice(0, 3).map((i) => {
        return (
          <div key={i._id} className="bg-white rounded-lg shadow-lg">
            <div className="flex flex-col items-center text-center p-10 bg-[#fcf9f4]">
              <span className="font-semibold text-2xl font-subtitle">
                {i?.name}
              </span>
              <div className="flex items-center">
                <span className="text-xl pt-5 text-[#a59167]">{i?.price}</span>
              </div>
            </div>
            <div className="p-10">
              <div dangerouslySetInnerHTML={{ __html: i?.content }} />
            </div>
            <div className="text-center py-5">
              <button
                onClick={() => handleOrder(i)}
                className="bg-[#ae9d78] m-2 hover:bg-[#6c531a] text-white font-bold py-2 px-4 rounded"
              >
                Subscription
              </button>
            </div>
          </div>
        );
      })}
      <Link to='/packages'>
       <div  className="bg-white rounded-lg shadow-lg">
            <div className="flex flex-col items-center text-center p-10 bg-[#fcf9f4]">
              <span className="font-semibold text-2xl font-subtitle">
                Want To Brows More ?
              </span>
             
            </div>
            <div className="p-10">
              <h1 className="text-center text-4xl">View All</h1>
            </div>

            
          </div>
          </Link>
    </div>
    </div>
  );
};

export default PackageSection;
