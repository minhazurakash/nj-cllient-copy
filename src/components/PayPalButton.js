import React, { useEffect, useRef } from 'react';
import { loadScript } from '../utils';

const PayPalButton = ({ amount, currency, onApprove }) => {
  const buttonRef = useRef();

  useEffect(() => {
    const initPayPalButton = async () => {
      const paypal = window.paypal;

      if (!paypal) {
        await loadScript('https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID');
      }

      paypal.Buttons({
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                  currency_code: currency,
                },
              },
            ],
          });
        },
        onApprove: function (data, actions) {
          return actions.order.capture().then(function (details) {
            onApprove(details);
          });
        },
        onError: function (err) {
          console.error(err);
        },
      }).render(buttonRef.current);
    };

    initPayPalButton();
  }, [amount, currency, onApprove]);

  return <div ref={buttonRef}></div>;
};

export default PayPalButton;
