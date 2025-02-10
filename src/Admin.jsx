import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [dropdowns, setDropdowns] = useState({
    dashboard: false,
    orders: false,
    products: false,
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = (menu) => {
    setDropdowns((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className="font-sans bg-neutral-50 h-screen flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 ${
          isSidebarOpen ? "w-64" : "w-16"
        } h-full bg-white border-r border-neutral-200 transition-all duration-300 shadow-lg`}
      >
        <div className="p-4 flex items-center">
          <img
            src="logo.png"
            alt="Logo"
            className="w-8 h-8 rounded-full mr-4"
          />
          <span
            className={`text-xl font-bold ${isSidebarOpen ? "" : "hidden"}`}
          >
            Admin Dashboard
          </span>
        </div>
        <div className="overflow-y-auto p-4">
          <ul className="space-y-4">
            {/* Dashboard Menu */}
            <li>
              <div
                className="flex items-center justify-between py-2 px-4 cursor-pointer hover:bg-gray-100 rounded-lg"
                onClick={() => toggleDropdown("dashboard")}
              >
                <span className="text-base flex items-center">
                  Dashboard
                </span>
                {dropdowns.dashboard ? <ChevronUp /> : <ChevronDown />}
              </div>
              {dropdowns.dashboard && (
                <ul className="pl-6 space-y-2">
                  <li className="py-2 px-4 hover:bg-gray-100 rounded-lg">
                    <a href="#">Overview</a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100 rounded-lg">
                    <a href="#">Analytics</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Orders Menu */}
            <li>
              <div
                className="flex items-center justify-between py-2 px-4 cursor-pointer hover:bg-gray-100 rounded-lg"
                onClick={() => toggleDropdown("orders")}
              >
                <span className="text-base">Orders</span>
                {dropdowns.orders ? <ChevronUp /> : <ChevronDown />}
              </div>
              {dropdowns.orders && (
                <ul className="pl-6 space-y-2">
                  <li className="py-2 px-4 hover:bg-gray-100 rounded-lg">
                    <a href="#">Pending Orders</a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100 rounded-lg">
                    <a href="#">Completed Orders</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Products Menu */}
            <li>
              <div
                className="flex items-center justify-between py-2 px-4 cursor-pointer hover:bg-gray-100 rounded-lg"
                onClick={() => toggleDropdown("products")}
              >
                <span className="text-base">Products</span>
                {dropdowns.products ? <ChevronUp /> : <ChevronDown />}
              </div>
              {dropdowns.products && (
                <ul className="pl-6 space-y-2">
                  <li className="py-2 px-4 hover:bg-gray-100 rounded-lg">
                    <a href="#">All Products</a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100 rounded-lg">
                    <a href="#">Add Product</a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 ml-${isSidebarOpen ? "64" : "16"} transition-all duration-300`}
      >
        <div className="flex items-center justify-between p-4 border-b border-neutral-200 bg-white shadow-md">
          <button
            className="p-2 text-xl hover:bg-gray-100 rounded-lg"
            onClick={toggleSidebar}
          >
            ☰
          </button>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="form-control px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="btn bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600">
              Add New
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h2 className="text-2xl font-bold">Welcome to the Admin Dashboard</h2>
          <p className="mt-4 text-gray-600">Manage your data efficiently here.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
