import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import { useOrder } from "../Hooks/useOrder";
import { usePackage } from "../Hooks/usePackage";

const PackagePage = () => {
  const [load, setLoad] = useState(false);
  const [Orders, isLoad, refetch] = useOrder();
  const [Package, isLoading, reFetch] = usePackage();
  const [user, loading, error] = useAuthState(auth);
  const userName = user?.displayName;
  const userEmail = user?.email;

  const handleOrder = async (i) => {
    setLoad(true);
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
    console.log(orderDetails);
    const res = await axios.post(
      "https://bored-yoke-bee.cyclic.app/api/v1/order",
      orderDetails
    );
    if (res) {
      setLoad(false);
      refetch();
      if (res.data.success) {
        // navigate("/dashboard/order");
        toast("Package Order Successfull");
      }
    }
  };
  return (
    <div className="container mx-auto ">


<section className="relative z-10 overflow-hidden bg-[#f3e8e4] pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Pricing Table
                </span>
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  Our Pricing Plan
                </h2>
                <p className="text-body-color text-base">
                  There are many variations of passages of Lorem Ipsum available but
                  the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 px-20 flex flex-wrap justify-center">

          {Package?.data?.map((i) => {
          return (
            <>
            
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="border-[#f3e8e4] shadow-pricing relative z-9 mb-10 overflow-hidden rounded-xl border  bg-white py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12">
                <span className="text-primary mb-4 block text-lg font-semibold">
                  Personal
                </span>
                <h2 className="text-dark mb-5 text-[42px] font-bold">
                ${i?.price}
                  <span className="text-body-color text-base font-medium"> / year </span>
                </h2>
                <p className="text-body-color mb-8 border-b border-[#f3e8e4] pb-8 text-base">
                {i?.name}
                </p>
                <div dangerouslySetInnerHTML={{ __html: i?.content }} />
                <button onClick={() => handleOrder(i)} href="javascript:void(0)" className="text-primary mt-10 hover:bg-[#f3e8e4] hover:border-[#f3e8e4] block w-full rounded-md border border-[#f3e8e4] bg-transparent p-4 text-center text-base font-semibold transition hover:text-[#fff]">
                  Choose Plan
                </button>
                <div>
                  <span className="absolute right-0 top-7 z-[-1]">
                    <svg width={77} height={172} viewBox="0 0 77 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                      <defs>
                        <linearGradient id="paint0_linear" x1={86} y1={0} x2={86} y2={172} gradientUnits="userSpaceOnUse">
                          <stop stopColor="#f3e8e4" stopOpacity="0.09" />
                          <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute right-4 top-4 z-[-1]">
                    <svg width={41} height={89} viewBox="0 0 41 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="38.9138" cy="87.4849" r="1.42021" transform="rotate(180 38.9138 87.4849)" fill="#f3e8e4" />
                      <circle cx="38.9138" cy="74.9871" r="1.42021" transform="rotate(180 38.9138 74.9871)" fill="#f3e8e4" />
                      <circle cx="38.9138" cy="62.4892" r="1.42021" transform="rotate(180 38.9138 62.4892)" fill="#f3e8e4" />
                      <circle cx="38.9138" cy="38.3457" r="1.42021" transform="rotate(180 38.9138 38.3457)" fill="#f3e8e4" />
                      <circle cx="38.9138" cy="13.634" r="1.42021" transform="rotate(180 38.9138 13.634)" fill="#f3e8e4" />
                      <circle cx="38.9138" cy="50.2754" r="1.42021" transform="rotate(180 38.9138 50.2754)" fill="#f3e8e4" />
                      <circle cx="38.9138" cy="26.1319" r="1.42021" transform="rotate(180 38.9138 26.1319)" fill="#f3e8e4" />
                      <circle cx="38.9138" cy="1.42021" r="1.42021" transform="rotate(180 38.9138 1.42021)" fill="#f3e8e4" />
                      <circle cx="26.4157" cy="87.4849" r="1.42021" transform="rotate(180 26.4157 87.4849)" fill="#f3e8e4" />
                      <circle cx="26.4157" cy="74.9871" r="1.42021" transform="rotate(180 26.4157 74.9871)" fill="#f3e8e4" />
                      <circle cx="26.4157" cy="62.4892" r="1.42021" transform="rotate(180 26.4157 62.4892)" fill="#f3e8e4" />
                      <circle cx="26.4157" cy="38.3457" r="1.42021" transform="rotate(180 26.4157 38.3457)" fill="#f3e8e4" />
                      <circle cx="26.4157" cy="13.634" r="1.42021" transform="rotate(180 26.4157 13.634)" fill="#f3e8e4" />
                      <circle cx="26.4157" cy="50.2754" r="1.42021" transform="rotate(180 26.4157 50.2754)" fill="#f3e8e4" />
                      <circle cx="26.4157" cy="26.1319" r="1.42021" transform="rotate(180 26.4157 26.1319)" fill="#f3e8e4" />
                      <circle cx="26.4157" cy="1.4202" r="1.42021" transform="rotate(180 26.4157 1.4202)" fill="#f3e8e4" />
                      <circle cx="13.9177" cy="87.4849" r="1.42021" transform="rotate(180 13.9177 87.4849)" fill="#f3e8e4" />
                      <circle cx="13.9177" cy="74.9871" r="1.42021" transform="rotate(180 13.9177 74.9871)" fill="#f3e8e4" />
                      <circle cx="13.9177" cy="62.4892" r="1.42021" transform="rotate(180 13.9177 62.4892)" fill="#f3e8e4" />
                      <circle cx="13.9177" cy="38.3457" r="1.42021" transform="rotate(180 13.9177 38.3457)" fill="#f3e8e4" />
                      <circle cx="13.9177" cy="13.634" r="1.42021" transform="rotate(180 13.9177 13.634)" fill="#f3e8e4" />
                      <circle cx="13.9177" cy="50.2754" r="1.42021" transform="rotate(180 13.9177 50.2754)" fill="#f3e8e4" />
                      <circle cx="13.9177" cy="26.1319" r="1.42021" transform="rotate(180 13.9177 26.1319)" fill="#f3e8e4" />
                      <circle cx="13.9177" cy="1.42019" r="1.42021" transform="rotate(180 13.9177 1.42019)" fill="#f3e8e4" />
                      <circle cx="1.41963" cy="87.4849" r="1.42021" transform="rotate(180 1.41963 87.4849)" fill="#f3e8e4" />
                      <circle cx="1.41963" cy="74.9871" r="1.42021" transform="rotate(180 1.41963 74.9871)" fill="#f3e8e4" />
                      <circle cx="1.41963" cy="62.4892" r="1.42021" transform="rotate(180 1.41963 62.4892)" fill="#f3e8e4" />
                      <circle cx="1.41963" cy="38.3457" r="1.42021" transform="rotate(180 1.41963 38.3457)" fill="#f3e8e4" />
                      <circle cx="1.41963" cy="13.634" r="1.42021" transform="rotate(180 1.41963 13.634)" fill="#f3e8e4" />
                      <circle cx="1.41963" cy="50.2754" r="1.42021" transform="rotate(180 1.41963 50.2754)" fill="#f3e8e4" />
                      <circle cx="1.41963" cy="26.1319" r="1.42021" transform="rotate(180 1.41963 26.1319)" fill="#f3e8e4" />
                      <circle cx="1.41963" cy="1.4202" r="1.42021" transform="rotate(180 1.41963 1.4202)" fill="#f3e8e4" />
                    </svg>
                  </span>
                </div>
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
