import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Categories() {
  const { cid } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${cid}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [cid]);

  console.log("data:", data);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        key={data?.id}
        className="bg-white rounded-lg shadow-md overflow-hidden max-w-md"
      >
        <div className="p-6 flex flex-col justify-center items-center text-center">
          <h2 className="text-lg font-semibold mb-2 text-red-500">
            {data?.title}
          </h2>
          <p className="text-green-600 mb-4">URL: {data?.url}</p>
          <img
            src={data?.thumbnailUrl}
            alt={data?.title}
            className="mb-4 rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default Categories;
