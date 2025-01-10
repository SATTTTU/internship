import React, { useEffect, useState } from "react";

function Page2() {
  const [ano, setAno] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setAno(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ano.slice(0, 8).map((comments) => (
            <div
              key={comments.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 bg-white text-red-500">
                  {comments.name}
                </h2>
                <p className=" mb-4 text-blue-800"> Email:{comments.email}</p>
                <p className="text-blue-600 mb-4">{comments.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Page2;
