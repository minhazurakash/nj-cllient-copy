import React, { useState } from "react";

const ServicePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/v1/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, message }),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        // Display a success message to the user
      })
      .catch((err) => {
        console.error(err);
        // Display an error message to the user
      });
  };

  return (
    <div>
      <div className="relative flex items-top justify-center min-h-screen bg-white  sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 ">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className="p-6 mr-2 ">
                <h1 className="text-4xl lg:text-5xl pb-4 pt-10 xl:lg:pt-20 font-title pt-10 text-center">
                  Get in touch
                </h1>
                <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600  mt-2">
                  Fill in the form to start a conversation
                </p>
                <div className="flex items-center mt-8 text-gray-600 ">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    Acme Inc, Street, State,
                    Postal Code
                  </div>
                </div>
                <div className="flex items-center mt-4 text-gray-600 ">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    704-891-4329
                  </div>
                </div>
                <div className="flex items-center mt-2 text-gray-600 ">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    info@websitesprofessional.com
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-gray-400 border-2 p-3 rounded-lg focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-gray-400 border-2 p-3 rounded-lg focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block font-bold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border-gray-400 border-2 p-3 rounded-lg focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  className="w-full border-gray-400 border-2 p-3 rounded-lg focus:outline-none focus:border-blue-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Submit
              </button>
            </form>
        </div>
      </div>
    </div>
      </div >
    </div >
  );
};

export default ServicePage;
