import React, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const fetchTodo = async (id) => {
  const res = await axios.get(`http://localhost:3004/users/${id}`);
  return res.data;
};

const updateTodo = async (updatedTodo) => {
  try {
    const res = await axios.put(`http://localhost:3004/users/${updatedTodo.id}`, updatedTodo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    throw new Error("Error in updating todo");
  }
};

const Update = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getTodo = async () => {
      try {
        const todo = await fetchTodo(id);
        setName(todo.name);
        setEmail(todo.email);
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    };
    getTodo();
  }, [id]);

  const updateMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
      navigate("/");
    },
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill in all fields");
      return;
    }
    updateMutation.mutate({ id, name, email });
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-center text-2xl font-bold mb-4">Update Todo</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Update Todo
        </button>
      </form>
    </div>
  );
};

export default Update;
