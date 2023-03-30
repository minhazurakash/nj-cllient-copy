import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const PaymentPage = () => {
  const { packageId } = useParams();
  const [packageData, setPackageData] = useState({});
  const [load, setLoad] = useState(false);
  const [user] = useAuthState(auth);
  const data = packageData.data;
  const userName = user?.displayName;
  const userEmail = user?.email;
  const navigate = useNavigate();
  const packagePrice = data?.price;
  const packageName = data?.name;
  const packageCurrency = "USD";
const clientID = "AXrqL7N3P2QMF06Y4uSD8IF1it9zyS02p_hzEzEzCUHK8oR66R13Twiaalurj4rwNkuQ9T9y3vwX8TKY"
  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const response = await axios.get(`https://api.websitesprofessional.com/api/v1/package/${packageId}`);
        setPackageData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPackage();
  }, [packageId]);

  const handlePayment = async (data, actions) => {
    try {
      const capture = await actions.order.capture();
      const response = await axios.post("https://api.websitesprofessional.com/api/v1/order", {
        orderId: capture.id,
        userName,
        userEmail,
        packageId,
        packageName,
        packagePrice,
      });

      if (response.data.success) {
        toast.success("Payment successful!");
        navigate("/");
      }
    } catch (error) {
      toast.error("Payment failed, please try again later.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg mx-10">
        <div className="flex flex-col items-center text-center p-10 bg-[#fcf9f4] ">
          <span className="font-semibold text-2xl font-subtitle">{data?.name}</span>
          <div className="flex items-center">
            <span className="text-xl pt-5  text-[#a59167]">{data?.priceToShow}</span>
          </div>
        </div>
        <div className="p-10" dangerouslySetInnerHTML={{ __html: data?.content }} />
      </div>
      <h1 className="text-3xl text-center font-bold my-6">Payment Here</h1>
      <form className="text-center">
        <PayPalScriptProvider
          options={{
            "client-id": clientID,
            currency: packageCurrency,
          }}
        >
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [{ amount: { value: packagePrice, currency_code: packageCurrency } }],
              });
            }}
            onApprove={handlePayment}
            onCancel={() => {
              toast.warning("Payment cancelled.");
            }}
            onError={() => {
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
