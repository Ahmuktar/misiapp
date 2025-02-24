"use client";
import { useAuth } from "@/stores/useAuth";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MyOrdersPage = () => {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from API
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setOrders(data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, [token]);

  return (
    <div className="account-orders">
      <div className="wrap-account-order">
        <table>
          <thead>
            <tr>
              <th className="fw-6">Order</th>
              <th className="fw-6">Date</th>
              <th className="fw-6">Status</th>
              <th className="fw-6">Payment</th>
              <th className="fw-6">Total</th>
              <th className="fw-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>#{order.order_id}</td>
                <td>{order.created_at}</td>
                <td>
                  <span className="badge badge-warning">{order.status}</span>
                </td>
                <td>
                  <span className="badge badge-warning">
                    {order.payment_status}
                  </span>
                </td>
                <td>₦{order.total_amount}</td>
                <td>
                  <Link
                    href={`/my-orders/${order.order_id}`}
                    className="tf-btn btn-fill radius-4"
                  >
                    <span className="text">View</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
