import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import LoadingComponent from '../../../shared/LoadingComponent';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  if(loading){
    <LoadingComponent/>
  }
  useEffect(() => {
    axios
      .get(`https://api.websitesprofessional.com/api/v1/user/${user.email}/orders`)
      .then((response) => {
        if (response.data.success) {
          setOrders(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="my-10 mx-auto w-3/4">
      <div className="mx-auto mb-[60px] max-w-[510px] text-center">
            <h2 className="text-dark font-title mb-4 mt-10 xl:lg:mt-20 text-3xl font-bold sm:text-4xl md:text-[40px]">
              My Oders
            </h2>
          </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">User Name</th>
            <th className="px-4 py-2">User Email</th>
            <th className="px-4 py-2">Package Name</th>
            <th className="px-4 py-2">Package Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td className="border px-4 py-2">{order.orderId}</td>
              <td className="border px-4 py-2">{order.userName}</td>
              <td className="border px-4 py-2">{order.userEmail}</td>
              <td className="border px-4 py-2">{order.packageName}</td>
              <td className="border px-4 py-2">{order.packagePrice}$</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
