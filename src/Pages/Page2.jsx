import React, { useEffect, useState } from "react";
import Loading from "./Loading";

function Page2() {
  const [ano, setAno] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(
    () => {
       async function fetchData(){
        try{
        const response =await fetch("https://jsonplaceholder.typicode.com/comments");
        const data=await response.json();
        setAno(data);
        }catch(error){
        console("Error fetching data:",error);
        }finally{
          setLoading(false);}
          
          
        }
   fetchData();
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
          {ano.slice(0, 8).map((comments) => (
            <div
              key={comments.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
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
