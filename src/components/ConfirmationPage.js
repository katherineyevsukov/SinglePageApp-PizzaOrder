import React from "react";
import "../styling/ConfirmationPage.css";

export default function ConfirmationPage(props) {
  const { order } = props;
  return (
    <div className="order-confirmation">
      <h4>Thank you for your order!</h4>
      <div className="order-wrapper">
        <h5>Order Details</h5>
        <p>Name: {order.name}</p>
        <p>{order.size}</p>

        {order.cheese && <li>Extra Cheese</li>}
        {order.pepperoni && <li>Pepperoni</li>}
        {order.peppers && <li>Banana Peppers</li>}
        {order.pineapple && <li>Pineapple</li>}

        {order.special && <p>{order.special}</p>}
      </div>
    </div>
  );
}
