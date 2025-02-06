import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const deleteTodo = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:3004/users/${id}`);
    return res.data;
  } catch (error) {
    throw new Error("Error in deleting todo");
  }
};

const Delete = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
      console.log("Successfully deleted");
      setShowModal(false);
      navigate("/");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleDelete = () => {
    if (!id) {
      console.error("ID is undefined, cannot delete.");
      return;
    }
    deleteMutation.mutate(id);
    console.log("deleted sucessfully");
  };

  const handleCancel = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg text-center">
            <h2 className="text-lg font-semibold mb-4">
              Are you sure you want to delete this?
            </h2>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 mr-4"
            >
              Yes
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Delete;
