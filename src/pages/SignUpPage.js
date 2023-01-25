import React from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mx-auto">
      <div className="mt-20 mb-10">
        <h1 className="text-4xl">Sign Up</h1>
      </div>
      <div className="mb-20 mt-5 border-2 border-[#FFF79E] p-5">
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="mb-10">
              <label className="">User Name *</label>
              <input
                type="text"
                className="w-full h-14 pl-5 border-2 border-slate-300 mt-3"
              />
            </div>
            <div className="mb-10">
              <label className="">Email Address *</label>
              <input
                type="email"
                className="w-full h-14 pl-5 border-2 border-slate-300 mt-3"
              />
            </div>
            <div>
              <label>Password *</label>
              <input
                type="password"
                className="w-full h-14 pl-5 border-2 border-slate-300 mt-3"
              />
            </div>
            <div className="mt-3">
              <div className="text-lg flex items-center gap-3">
                <input type="checkbox" id="remember" className="w-4 h-4" />
                <label htmlFor="remember">Remember me</label>
              </div>
            </div>
            <div className="mt-8">
              <input
                className="bg-[#FFF79E] py-2 px-8 cursor-pointer"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <div className="flex gap-5 mt-5">
            <Link className="underline text-gray-500" to="/login">
              Already have an accaount?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
