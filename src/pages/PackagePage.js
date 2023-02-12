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
      "http://localhost:5000/api/v1/order",
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
    <div className="container mx-auto px-4">
      <div className="my-5">
        <h1 className="text-3xl font-bold text-center uppercase">
          our package
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Package?.data?.map((i) => {
          return (
            <>
              <div className="my-14 flex flex-col justify-between border-2 p-5 rounded-lg text-center">
                <div>
                  <div className="text-center mb-5">
                    <h2 className="text-2xl font-bold uppercase">{i?.name}</h2>
                  </div>
                  <div className="mb-5">
                    <h2 className="text-5xl font-bold text-center">
                      ${i?.price}
                    </h2>
                    <h3 className="text-md text-center">Per Month</h3>
                  </div>
                  <div className="text-left pl-5">
                    <div dangerouslySetInnerHTML={{ __html: i?.content }} />
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    onClick={() => handleOrder(i)}
                    className="w-full px-10 py-4 uppercase bg-[#FFF79E] hover:bg-[#EDCF55]"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </>
          );
        })}
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PackagePage;
