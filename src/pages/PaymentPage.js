import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import { useOrder } from "../Hooks/useOrder";
import { usePackage } from "../Hooks/usePackage";
import LoadingComponent from "../shared/LoadingComponent";
const PaymentPage = () => {
  // State variables
  const [load, setLoad] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [Orders, isLoad, refetchOrders] = useOrder();
  const [Package, isLoading, refetchPackages] = usePackage();

  // Constants and variables
  const { packageId } = useParams();
  const data = Package.data.find((item) => item._id === packageId);
  const userName = user?.displayName;
  const userEmail = user?.email;
  const navigate = useNavigate();
  const packageItem = Package.data.find((item) => item._id === packageId);
  const packagePrice = packageItem?.priceToShow;
  const packageName = packageItem?.name;
  const packageCurrency = "USD";
  const orderId = `ORDER-${Math.random().toString(36).substring(2)}`;

  // Fetch data on page load
  useEffect(() => {
    refetchPackages();
    refetchOrders();
  }, []);

  // Handle payment
  const handlePayment = async (event) => {
    event.preventDefault();
    setLoad(true);

    const orderDetails = {
      orderId,
      userName,
      userEmail,
      packageId,
      packageName,
      packagePrice,
    };

    try {
      // Create order
      const response = await axios.post(
        "https://api.websitesprofessional.com/api/v1/order",
        { orderDetails }
      );

      if (response && response.data.orderId) {
        const orderID = response.data.orderId;
        const approveUrl = response.data.links.find(
          (link) => link.rel === "approve"
        );

        // Redirect to PayPal
        if (approveUrl) {
          window.location.href = approveUrl.href;
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Payment failed, please try again later.");
    }

    setLoad(false);
  };
  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg mx-10">
        <div className="flex flex-col items-center text-center p-10 bg-[#fcf9f4] ">
          <span className="font-semibold text-2xl font-subtitle">{data?.name}</span>
          <div className="flex items-center">
            <span className="text-xl pt-5  text-[#a59167]">{data?.priceToShow}</span>
          </div>
        </div>
        <div className="p-10">
          <div dangerouslySetInnerHTML={{ __html: data?.content }} />
        </div>
        <div className="text-center py-5">
        </div>
      </div>
      <h1 className="text-3xl  text-center  font-bold my-6">Payment Here</h1>
      <form onSubmit={handlePayment} className="text-center">
        <PayPalScriptProvider
          options={{
            "client-id": "AV4kba7dUEZTPqNYt06sKoeBKzokMtzfNLFwV92NluMXln3ttMs6_CTuqjq-SylMFvOKOU_Z05_x9v95",
            currency: packageCurrency,
          }}
        >
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: packagePrice,
                      currency_code: packageCurrency,
                    },
                  },
                ],

              });
            }}
            onApprove={async (data, actions) => {
              try {
                // Capture order
                const capture = await actions.order.capture();
                // Save order
                const orderDetails = {
                  orderId: capture.id,
                  userName,
                  userEmail,
                  packageId,
                  packageName,
                  packagePrice,
                };

                const response = await axios.post(
                  "https://api.websitesprofessional.com/api/v1/order",
                  { orderDetails }
                );

                if (response && response.data.success) {
                  toast.success("Payment successful!");
                  navigate("/");
                }
              } catch (error) {
                console.log(error);
                toast.error("Payment failed, please try again later.");
              }
            }}
            onCancel={() => {
              toast.warning("Payment cancelled.");
            }}
            onError={(error) => {
              console.log(error);
              toast.error("Payment failed, please try again later.");
            }}
            disabled={load}
            style={{ color: "gold", shape: "rect", label: "pay" }}
          />
        </PayPalScriptProvider>
      </form>
    </div>
  );
};

export default PaymentPage;
