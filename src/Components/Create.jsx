import React, { useState } from "react";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const queryClient = useQueryClient();

  const postTodo = async (newTodo) => {
    try {
      const res = await axios.post("http://localhost:3004/users", newTodo, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      throw new Error("Error in posting todo");
    }
  };

  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      alert("Added successfully!");
      queryClient.invalidateQueries(["todos"]); 
    },
    onError: () => {
      alert("Something went wrong!");
    }
  });

  const handleAddTodo = (e) => {
    e.preventDefault(); 
    mutation.mutate({
      id: Date.now(),
      name,
      username: name, 
      email,
    });
    setName(''); 
    setEmail('');
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-4">Create a Todo</h1>
      <form onSubmit={handleAddTodo} className="max-w-sm mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Todo
        </button>
      </form>
    </>
  );
};

export default Create;
