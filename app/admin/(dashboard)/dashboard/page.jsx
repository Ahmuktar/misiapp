import React from "react";

const AdminDashboard = () => {
  return (
    <div className="flex-1 overflow-x-hidden overflow-y-auto p-6 bg-gray-100">
      {/* Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Revenue</h3>
          <p className="text-2xl font-bold text-gray-900">$12,345</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
          <p className="text-2xl font-bold text-gray-900">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
          <p className="text-2xl font-bold text-gray-900">567</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">
            Sales Overview
          </h3>
          <div className="mt-4">
            {/* Placeholder for Chart */}
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Recent Orders</h3>
          <div className="mt-4">
            {/* Placeholder for Table */}
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-700">Quick Actions</h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600">
            Add Product
          </button>
          <button className="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600">
            View Orders
          </button>
          <button className="bg-purple-500 text-white p-4 rounded-lg hover:bg-purple-600">
            Manage Users
          </button>
          <button className="bg-red-500 text-white p-4 rounded-lg hover:bg-red-600">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
