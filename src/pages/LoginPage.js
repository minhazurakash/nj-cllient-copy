import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import LoadingOverlay from "../shared/LoadingOverlay";

const LoginPage = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, userEmail, loadingEmail, errorEmail] =
    useSignInWithEmailAndPassword(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;


    signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      if(userCredential){
        navigate('/')
      const user = userCredential.user;
      toast(`${user.displayName} Sign In successful`);
      }
      
      

    })

    
    // signInWithEmailAndPassword(email, password).then(() => {
      
      
    //   toast("Sign In successful");
    // }).catch((error) => {
    //   toast(`${errorEmail}An error happened`);
    // });

   
  };
  if (loadingEmail) {
    
    return <LoadingOverlay />;
    
  }

  return (
    <div className="h-screen bg-[#fbf8f5] py-20 flex justify-center items-center">
      <div className="w-3/3 lg:xl:w-1/3 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-4">Welcome back!</h2>
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
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border rounded-lg px-3 py-2 w-full"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-[#ae9d78] hover:bg-[#775d22] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Log in
            </button>
            <a
              href="#"
              className="inline-block align-baseline font-bold text-sm text-[#ae9d78] hover:text-[#775d22]"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <div className="text-center mt-8">
          <p className="text-gray-600 font-bold">Don't have an account?</p>
          <a
            href="/sign-up"
            className="text-[#ae9d78] hover:text-[#775d22] font-bold"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
