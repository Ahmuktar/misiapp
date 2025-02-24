import React from "react";
import { Clock, MapPin, Package } from "lucide-react";

function ReceiptTemplate() {
  const orderDetails = {
    orderNumber: "ORD-2024-2345",
    date: "February 23, 2024",
    time: "14:30 PM",
    customerName: "John Doe",
    email: "customer@example.com",
    shippingAddress: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },
    items: [
      {
        name: "Wireless Headphones",
        quantity: 1,
        price: 129.99,
        total: 129.99,
      },
      { name: "Phone Case", quantity: 2, price: 59.99, total: 119.98 },
    ],
    subtotal: 249.97,
    shipping: 9.99,
    tax: 20.0,
    total: 279.96,
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 print:p-4">
      {/* Print-only notice */}
      <div className="mb-6 text-gray-500 text-sm print:hidden">
        Press Ctrl+P (Windows) or Cmd+P (Mac) to print this receipt
      </div>

      {/* Header */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Order Receipt</h1>
            <p className="text-gray-600 text-sm mt-1">
              Thank you for your purchase!
            </p>
          </div>
          <div className="text-right">
            <img
              src="/assets/images/logo/logo.png"
              alt="Store Logo"
              className="h-8 mb-2"
            />
            <p className="text-sm text-gray-600">www.misi.ng</p>
          </div>
        </div>
      </div>

      {/* Order Info */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-2">
            Order Information
          </h2>
          <div className="space-y-1 text-sm">
            <p className="flex items-center text-gray-600">
              <Package className="w-4 h-4 mr-2" />
              Order: #{orderDetails.orderNumber}
            </p>
            <p className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              {orderDetails.date} at {orderDetails.time}
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-2">
            Shipping Address
          </h2>
          <div className="space-y-1 text-sm">
            <p className="flex items-start text-gray-600">
              <MapPin className="w-4 h-4 mr-2 mt-0.5" />
              <span>
                {orderDetails.customerName}
                <br />
                {orderDetails.shippingAddress.street}
                <br />
                {orderDetails.shippingAddress.city},{" "}
                {orderDetails.shippingAddress.state}{" "}
                {orderDetails.shippingAddress.zip}
                <br />
                {orderDetails.shippingAddress.country}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 font-semibold text-gray-900">
                Item
              </th>
              <th className="text-center py-3 font-semibold text-gray-900">
                Qty
              </th>
              <th className="text-right py-3 font-semibold text-gray-900">
                Price
              </th>
              <th className="text-right py-3 font-semibold text-gray-900">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.items.map((item, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-3 text-gray-900">{item.name}</td>
                <td className="py-3 text-center text-gray-600">
                  {item.quantity}
                </td>
                <td className="py-3 text-right text-gray-600">
                  ${item.price.toFixed(2)}
                </td>
                <td className="py-3 text-right text-gray-900">
                  ${item.total.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Summary */}
      <div className="border-t border-gray-200 pt-6 mb-6">
        <div className="flex justify-end">
          <div className="w-64 space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span>${orderDetails.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Shipping</span>
              <span>${orderDetails.shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Tax</span>
              <span>${orderDetails.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-base font-semibold text-gray-900 pt-2 border-t border-gray-100">
              <span>Total</span>
              <span>${orderDetails.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 border-t border-gray-200 pt-6">
        <p className="mb-1">
          If you have any questions about this receipt, please contact
        </p>
        <p className="mb-4">support@yourstore.com | +1 (555) 123-4567</p>
        <p>
          &copy; {new Date().getFullYear()} Your Store Name. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}

export default ReceiptTemplate;
