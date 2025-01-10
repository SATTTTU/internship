import React, { useEffect, useState } from "react";

function Page1() {
  const [val, setVal] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setVal(data));
  }, []);

  return (
    <section className=" py-10">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {val. slice(0,8).map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-red-800">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.body}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}

export default Page1;
