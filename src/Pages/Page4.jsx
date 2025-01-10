import React, { useEffect, useState } from "react";
import Loading from "./Loading";

function Page4() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => console.error("Fetch error:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">User List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {users.slice(0, 8).map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 text-red-500">
                  {user.name}
                </h2>
                <p className="text-green-600 mb-4">Username: {user.username}</p>
                <p className="text-blue-600 mb-4">Email: {user.email}</p>
                <p>
                  Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Page4;