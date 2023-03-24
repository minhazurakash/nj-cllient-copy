import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from 'react';

function PayPalButton({ amount }) {
  const paypalOptions = {
    clientId: 'YOUR_CLIENT_ID_HERE',
    currency: 'USD',
  };
  
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount
          }
        }
      ]
    });
  };
  
  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      console.log(details);
      // Update your app's database with the payment details
    });
  };
  
  return (
    <PayPalScriptProvider options={paypalOptions}>
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </PayPalScriptProvider>
  );
}

export default PayPalButton;
