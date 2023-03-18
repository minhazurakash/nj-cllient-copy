import React from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import LoadingOverlay from "../shared/LoadingOverlay";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [createUserWithEmailAndPassword, passUser, passLoading, PassError] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // create user
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };
  if (loading || passLoading) {
    return <LoadingOverlay />;
  }
  if (user?.email) {
    navigate("/");
  }
  return (
    <div className="h-screen bg-[#fbf8f5] py-20 flex justify-center items-center">
    <div className="w-3/3 lg:xl:w-1/3 bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-center mb-4">Welcome!</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-bold mb-2"
          >
            Email
          </label>
          <input
            type="name"
            name="name"
            id="name"
            className="border rounded-lg px-3 py-2 w-full"
            required
          />
        </div>
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
            Sing UP
          </button>

        </div>
      </form>
      <div className="text-center mt-8">
        <p className="text-gray-600 font-bold">Already have an account?</p>
        <a
          href="/sign-up"
          className="text-[#ae9d78] hover:text-[#775d22] font-bold"
        >
          Sign In
        </a>
      </div>
    </div>
  </div>
  );
};

export default SignUpPage;
