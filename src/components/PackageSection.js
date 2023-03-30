import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import { usePackage } from "../Hooks/usePackage";

const PackageSection = () => {
  const [setLoad] = useState(false);
  const [Package,] = usePackage();
  const [user] = useAuthState(auth);
  const userName = user?.displayName;
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setLoading] = useState(false);
  // Submit handler function
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send POST request to server with input values in the body
    fetch('https://api.websitesprofessional.com/api/v1/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, message }),
    })
      .then((res) => res.text())
      .then((data) => {
        setShowModal(false);
        toast("Your Request Stored successfully");

        // console.log(data);
        // Display a success message to the user
      })
      .catch((err) => {
        console.error(err);
        // Display an error message to the user
      });
  };
  const handleOrder = async (i) => {
    // setLoad(true);

    if (!userName) {
      navigate("/login");
    } else {

      const packageId = i?._id;
      navigate(`/payment/${packageId}`);
    }
  };

  const [showModal, setShowModal] = useState(false);


  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="bg-[#F5F2EC]">
      <div className="mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] max-w-[510px] text-center">
            <h2 className="text-dark font-title mb-4 mt-10 xl:lg:mt-20 text-3xl font-bold sm:text-4xl md:text-[40px]">
              Packages
            </h2>
          </div>
        </div>
      </div>
      <div className="mx-4 lg:xl:px-20 px-6 pb-10  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {Package?.data?.slice(Math.max(Package?.data?.length - 3, 0)).map((i) => {
          return (
            <>
              <div className="bg-white rounded-lg shadow-lg">
                <div className="flex flex-col items-center text-center p-10 bg-[#fcf9f4] ">
                  <span className="font-semibold text-2xl font-subtitle">{i?.name}</span>
                  <div className="flex items-center">
                    <span className="text-xl pt-5  text-[#a59167]">{i?.priceToShow}</span>
                  </div>
                </div>
                <div className="p-10">
                  <div dangerouslySetInnerHTML={{ __html: i?.content }} />
                </div>
                <div className="text-center py-5">
                  <button onClick={() => handleOrder(i)} className="bg-[#F5F2EC ] border-[#a5a5a5] border-2  text-[#a5a5a5] m-2 hover:bg-[#AE9D78] hover:text-white hover:border-white font-bold py-2 px-4">
                    Subscription
                  </button>
                </div>
              </div>
            </>
          );
        })}

      </div>
      <div className="mx-4 lg:xl:px-20 px-6pb-10 grid grid-cols-1 gap-20">
        <div className="bg-white rounded-lg shadow-lg xl:lg:mx-[120px]">
          <div className="flex flex-col items-center text-center p-10 bg-[#fcf9f4] ">
            <span className="font-semibold text-2xl font-subtitle">Want a Custom Build</span>
            <div className="flex items-center">
              <span className="text-xl pt-5  text-[#a59167]">make your Own Budget Plan</span>
            </div>
          </div>
          <div className="p-10 text-center">
            <p> For custom package, please contact us and we will be happy to assist you</p>
          </div>
          <div className="text-center py-5">
            <button
              className="bg-[#F5F2EC ] border-[#a5a5a5] border-2  text-[#a5a5a5] m-2 hover:bg-[#AE9D78] hover:text-white hover:border-white font-bold py-2 px-4"
              onClick={handleClick}
            >
              Contact Us
            </button>

            {showModal && (
              <div className={`w-96 ${showModal ? 'block' : 'hidden'} transition-all duration-500`}>
                <div className="fixed z-[100] inset-0 overflow-y-auto">
                  <div className="flex flex-col items-center justify-center min-h-screen bg-[#f3e8e4c7]">

                    <div className="w-full max-w-md px-6 py-10 bg-white rounded-lg shadow-lg">
                      <h2 className="text-2xl font-bold mb-8 text-gray-800">Contact Us</h2>

                      <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border-b-4 border-b-[#f3e8e4c7] focus:border-blue-400"
                            placeholder="Name"
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border-b-4 border-b-[#f3e8e4c7] focus:border-blue-400"
                            placeholder="Email"
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-3 py-2 border-b-4 border-b-[#f3e8e4c7] focus:border-blue-400"
                            placeholder="Phone"
                          />
                        </div>
                        <div className="mb-6">
                          <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="5"
                            className="w-full px-3 py-2 border-b-4 border-b-[#f3e8e4c7] focus:border-blue-400"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div className="flex justify-center">
                          <button
                            type="submit"
                            className="bg-[#ae9d78] m-2 hover:bg-[#6c531a] text-white font-bold py-2 px-4 rounded"
                          >
                            Submit
                          </button>
                          <button
                            type="button"
                            onClick={handleClose}
                            className=" bg-[#6c531a] m-2 hover:bg-[#6c531f] text-white font-bold py-2 px-4 rounded"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            )}


          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageSection;
