import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import { useOrder } from "../Hooks/useOrder";
import { usePackage } from "../Hooks/usePackage";
const PackagePage = () => {
  console.log('package Loaded');
  const [load, setLoad] = useState(false);
  const [Orders, isLoad, refetch] = useOrder();
  const [Package, isLoading, reFetch] = usePackage();
  const [user, loading, error] = useAuthState(auth);
  const userName = user?.displayName;
  const userEmail = user?.email;
  const navigate  = useNavigate ();
  const handleOrder = async (i) => {
    setLoad(true);
  
    if (!userName) {
      navigate("/login");
    } else {
      
      const packageId = i?._id;
      //  const packageName = i?.name;
      //  const packagePrice = i?.priceToShow;
      //  const orderId = `ORDER-${Math.random().toString(36).substring(2)}`;
      //  const orderDetails = {
      //    orderId,
      //    userName,
      //    userEmail,
      //    packageId,
      //    packageName,
      //    packagePrice,
      //  };
      //  console.log(packageId);
      navigate(`/payment/${packageId}`);
    }
  };
  return (
    <div className="container mx-auto ">


      <section className="relative z-10 overflow-hidden bg-[#fff] pt-10 pb-12 lg:pt-[30px] ">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">

                <h2 className="text-dark font-title mb-4 mt-10 xl:lg:mt-20 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  Our Packages
                </h2>

              </div>
            </div>
          </div>
          <div className="-mx-4 px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">

            {Package?.data?.map((i) => {
              return (
                <>
                  <div className="bg-white rounded-lg shadow-lg mx-10">
                    <div className="flex flex-col items-center text-center p-10 bg-[#fcf9f4] ">
                      <span className="font-semibold text-2xl font-subtitle">{i?.name}</span>
                      <div className="flex items-center">
                        {/* <span className="text-3xl">$</span> */}
                        <span className="text-xl pt-5  text-[#a59167]">{i?.priceToShow}</span>
                        {/* <span className="text-xl text-gray-500">/mo</span> */}
                      </div>
                    </div>
                    <div className="p-10">
                      <div dangerouslySetInnerHTML={{ __html: i?.content }} />
                    </div>
                    <div className="text-center py-5">
                      
                      <button onClick={()=>handleOrder(i)} className="bg-[#ae9d78] m-2 hover:bg-[#6c531a] text-white font-bold py-2 px-4 rounded">
                        Subscription
                      </button>
                    </div>

                  </div>
                 
                </>
              );
            })}
          </div>
        </div>
      </section>




    </div>
  );
};

export default PackagePage;
