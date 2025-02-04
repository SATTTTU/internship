import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Importing FontAwesome checkmark icon
import { ImCross } from "react-icons/im";
const Success = ({ onClose }) => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-sm relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <ImCross/>
        </button>
        <div className="text-green-500">
          {/* Success Icon */}
          <FaCheckCircle className="text-5xl mx-auto mt-4" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Success!</h2>
        <p className="text-gray-600 mt-2">Your form has been submitted successfully.</p>
      </div>
    </div>
  );
};

export default Success;
