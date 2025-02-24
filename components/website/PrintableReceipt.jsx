import React from "react";

const PrintableReceipt = ({ orderDetails }) => {
  return (
    <div className="printable-receipt">
      <h1 className="text-2xl font-bold mb-4">Order Receipt</h1>
      <div className="mb-4">
        <p>
          <strong>Order ID:</strong> {orderDetails.order_id}
        </p>
        <p>
          <strong>Date:</strong>{" "}
          {new Date(orderDetails.created_at).toLocaleDateString()}
        </p>
        <p>
          <strong>Total Amount:</strong> ₦{orderDetails.total_amount}
        </p>
      </div>

      <h2 className="text-xl font-bold mb-2">Items</h2>
      <ul className="mb-4">
        {orderDetails.items.map((item, index) => (
          <li key={index} className="mb-2">
            <p>
              <strong>{item.product_name}</strong>
            </p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ₦{item.price}</p>
            <p>Total: ₦{item.total_price}</p>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mb-2">Shipping Address</h2>
      <div className="mb-4">
        <p>{orderDetails.address.street}</p>
        <p>
          {orderDetails.address.city}, {orderDetails.address.state}
        </p>
        <p>{orderDetails.address.postal_code}</p>
        <p>{orderDetails.address.country}</p>
      </div>
    </div>
  );
};

export default PrintableReceipt;
