import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Pagination from "../Pagination/Pagination";

function Page1() {
  const [val, setVal] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setVal(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <Pagination items={val} />
      </div>
    </section>
  );
}

export default Page1;
