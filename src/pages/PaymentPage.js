import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { PayPalButton } from "react-paypal-button-v2";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import { useOrder } from "../Hooks/useOrder";

const PaymentPage = () => {
  const [order, isLoading] = useOrder();
  const [user, loading] = useAuthState(auth);
  const userName = user?.displayName;
  const navigate = useNavigate();
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userName) {
      navigate("/login");
    }
  }, [userName, navigate]);

  const handleSuccess = async (details, data) => {
    try {
      const orderId = order?.data[0]?._id;
      const res = await fetch(
        `https://api.websitesprofessional.com/api/v1/order/${orderId}/pay`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderID: data.orderID,
            payerID: data.payerID,
            paymentID: data.paymentID,
            paymentToken: data.paymentToken,
          }),
        }
      );
      if (res.ok) {
        setPaid(true);
      } else {
        setError("Failed to complete payment");
      }
    } catch (e) {
      console.log(e);
      setError("Failed to complete payment");
    }
  };

  const handleError = (error) => {
    console.log(error);
    setError("Failed to initiate payment");
  };

  return (
    <div className="container mx-auto">
      <section className="relative z-10 overflow-hidden bg-[#fff] pt-10 pb-12 lg:pt-[30px] ">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <h2 className="text-dark font-title mb-4 mt-10 xl:lg:mt-20 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  Payment
                </h2>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-white rounded-lg shadow-lg p-10">
                {isLoading && <div>Loading...</div>}
                {!isLoading && order?.data && (
                  <>
                    <h3 className="font-semibold text-lg mb-4">
                      Order Summary:
                    </h3>
                    <ul>
                      {order?.data[0]?.items.map((item) => (
                        <li key={item._id}>
                          {item.packageName} - ${item.packagePrice}
                        </li>
                      ))}
                    </ul>
                    <div className="text-right mt-4">
                      <h3 className="font-semibold text-lg">
                        Total: ${order?.data[0]?.total}
                      </h3>
                    </div>
                    <div className="mt-10">
                      <PayPalButton
                        amount={order?.data[0]?.total}
                        onSuccess={handleSuccess}
                        onError={handleError}
                        options={{
                          clientId: "YOUR_PAYPAL_CLIENT_ID_HERE",
                          currency: "USD",
                        }}
                     
/>
</div>
{error && (
<div className="text-red-500 mt-4">{error}</div>
)}
{paid && (
<div className="text-green-500 mt-4">
Payment completed successfully!
</div>
)}
</>
)}
</div>
</div>
</div>
</div>
</section>
</div>
);
};

export default PaymentPage;





