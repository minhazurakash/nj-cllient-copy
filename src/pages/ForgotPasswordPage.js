import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
const ForgotPasswordPage = () => {

  const [email, setEmail] = useState(" ");
//   const [auth, authLoading] = useAuth();
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    sendPasswordResetEmail(auth,e.target.email.value)
    .then(() => {
        ;
      // Password reset email sent!
      // 
      navigate('/')
      toast.success("Reset Password email sent")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    //   console.log(errorMessage);
      toast.error(errorMessage)
      // ..
    });
  };

  return (
    <div className="h-screen bg-[#fbf8f5] py-20 flex justify-center items-center">
      <div className="w-3/3 lg:xl:w-1/3 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          Forgot your password?
        </h2>
        <p className="text-gray-600 mb-6">
          Enter your email address below and we'll send you instructions on how
          to reset your password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border rounded-lg px-3 py-2 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#ae9d78] hover:bg-[#775d22] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Reset Password
          </button>
        </form>
        <div className="text-center mt-8">
          <p className="text-gray-600 font-bold">Remember your password?</p>
          <Link to="/login">
            <p className="text-[#ae9d78] hover:text-[#775d22] font-bold">
              Log in
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
