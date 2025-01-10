import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Categories from "./Categories";
import Loading from "./Loading";

function Page3() {
  const [ano, setAno] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(
    () => {
      fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => setAno(data))
        .catch((error) => console.error("Fetch error:", error))
        .then(() => setLoading(false));
    },

    []
  );
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ano.slice(0, 8).map((value) => (
            <div
              key={value.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 text-red-500">
                  {value.title}
                </h2>
                <p className="text-green-600 mb-4">Email: {value.url}</p>
                <p className="text-blue-600 mb-4">
                  <img src={value.thumbnailUrl} alt="" />
                </p>
                <Link
                  to={`/Categories/${value.id}`}
                  className="button hover:bg-blue-500 bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  About Us
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Routes>
        <Route path="Categories/:cid" element={<Categories />} />
      </Routes>
    </section>
  );
}

export default Page3;
