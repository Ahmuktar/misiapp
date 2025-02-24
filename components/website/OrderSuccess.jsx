"use client";
import React, { useEffect, useState } from "react";
import {
  CheckCircle,
  Package,
  Truck,
  Calendar,
  Phone,
  Printer,
  ChevronRight,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/stores/useAuth";
import PrintableReceipt from "./PrintableReceipt";
import ReceiptTemplate from "./ReceiptTemplate";

function OrderSuccess() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  useEffect(() => {
    if (!orderId) return;

    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/orders/${orderId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // if needed
            },
          }
        );
        const data = await response.json();

        if (data.status === "success") {
          setOrderDetails(data.data);
        } else {
          throw new Error(data.message || "Failed to fetch order details");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  const handlePrint = () => {
    window.print();
  };

  if (!orderId) {
    return (
      <div className="text-center mb-8">
        <p className="text-xl text-gray-700">Order ID not found.</p>
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-primary hover:text-primary font-medium"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-center mb-8">
        <p className="text-xl text-gray-700">Loading order details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mb-8">
        <p className="text-xl text-gray-700">{error}</p>
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-primary hover:text-primary font-medium"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (!orderDetails) {
    return (
      <div className="text-center mb-8">
        <p className="text-xl text-gray-700">Order not found.</p>
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-primary hover:text-primary font-medium"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Success Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Order Successfully Placed!
        </h1>
        <p className="text-gray-600">
          Thank you for your purchase. Your order #{orderDetails.order_id} has
          been confirmed.
        </p>
      </div>

      {/* Order Progress */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 text-green-600">
            <Package className="w-5 h-5" />
            <span className="text-sm font-medium">Order Confirmed</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Truck className="w-5 h-5" />
            <span className="text-sm">Preparing</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Calendar className="w-5 h-5" />
            <span className="text-sm">Estimated Delivery</span>
          </div>
        </div>

        <div className="relative mt-4">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
            <div className="w-1/3 bg-green-500"></div>
          </div>
        </div>
      </div>

      {/* Order Details */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Order Details
          </h2>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">
                Order number
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {orderDetails.order_id}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Order date</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(orderDetails.created_at).toLocaleDateString()}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">
                Total amount
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                ₦{orderDetails.total_amount}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">
                Payment status
              </dt>
              <dd className="mt-1 text-sm text-gray-900 capitalize">
                {orderDetails.payment_status}
              </dd>
            </div>
          </dl>
        </div>

        <div className="border-t border-gray-200">
          <div className="p-6">
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Order Items
            </h3>
            <div className="space-y-3">
              {orderDetails.items.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {item.quantity}x {item.product_name}
                  </span>
                  <span className="text-gray-900">₦{item.total_price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Address */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Shipping Address
          </h2>
          <div className="text-sm text-gray-900">
            <p>{orderDetails.address.street}</p>
            <p>
              {orderDetails.address.city}, {orderDetails.address.state}
            </p>
            <p>{orderDetails.address.postal_code}</p>
            <p>{orderDetails.address.country}</p>
          </div>
        </div>
      </div>

      {/* <PrintableReceipt orderDetails={orderDetails} /> */}

      {/* Action Buttons */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <button
          onClick={handlePrint}
          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          <Printer className="w-4 h-4 mr-2" />
          Print Receipt
        </button>
        <button className="btn bg-main flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          Track Order
          <ChevronRight className="w-4 h-4 ml-2" />
        </button>
      </div>

      {/* Need Help */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          Need help with your order?{" "}
          <Link
            href="/contact"
            className="text-indigo-600 font-medium inline-flex items-center hover:text-indigo-500"
          >
            <Phone className="w-4 h-4 mr-1" />
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  );
}

export default OrderSuccess;
