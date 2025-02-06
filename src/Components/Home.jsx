import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";

const getTodo = async () => {
  try {
    const res = await axios.get(`http://localhost:3004/users`);
    return res.data;
  } catch (error) {
    throw new Error("Network response was not ok");
  }
};

const Home = () => {
  const id = useParams();
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodo,
  });

  if (isLoading) return <p className="text-center text-xl">Loading...</p>;
  if (isError)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Todos</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4 mb-4">
        <Link
          to="/Create"
          className="flex justify-end align-end mt-4 py-2 px-4  text-white rounded-lg  transition duration-200"
        >
          <button className="bg-blue-500 p-4">Add todo</button>
        </Link>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((todo) => (
              <tr key={todo.id} className="border-b">
                <td className="px-4 py-2">{todo.name}</td>
                <td className="px-4 py-2">{todo.email}</td>
                <td className="px-4 py-2 text-center">
                  <Link to={`/Update/${todo.id}`}>
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Update
                  </button>
                  </Link>
                  <Link to={`/delete/${todo.id}`}>
                    <button className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
                      Delete
                    </button>
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

export default Home;
