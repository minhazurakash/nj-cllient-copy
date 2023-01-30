import React from "react";
import { usePackage } from "../Hooks/usePackage";

const PackagePage = () => {
  const [Package, isLoading, reFetch] = usePackage();
  return (
    <div className="container mx-auto">
      <div className="my-5">
        <h1 className="text-3xl font-bold text-center uppercase">
          our package
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {Package?.data?.map((i) => {
          return (
            <>
              <div className="my-14 border border-2 p-5 rounded-lg text-center">
                <div className="text-center mb-5">
                  <h2 className="text-2xl font-bold uppercase">{i?.name}</h2>
                </div>
                <div className="mb-5">
                  <h2 className="text-5xl font-bold text-center">
                    ${i?.price}
                  </h2>
                  <h3 className="text-md text-center">Per Month</h3>
                </div>
                <div className="text-left">{i?.content}</div>
                <div className="mt-10">
                  <button className="w-full px-10 py-4 uppercase bg-[#FFF79E] hover:bg-[#EDCF55]">
                    get start today
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
