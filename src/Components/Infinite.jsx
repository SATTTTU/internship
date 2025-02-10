import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useRef, useCallback } from "react";

const Infinite = () => {
  const observerRef = useRef(null); 

  const fetchProjects = async ({ pageParam = 1 }) => {
    const res = await axios.get(
      `https://api.escuelajs.co/api/v1/categories/1/products?offset=${(pageParam - 1) * 10}&limit=10`
    );
    return res.data;
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 10) return undefined;
      return allPages.length + 1;
    },
  });

  const lastElementRef = useCallback(
    (node) => {
      if (isFetchingNextPage) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage]
  );

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.pages.flat().map((project, index, arr) => (
          <div
            key={project.id}
            ref={index === arr.length - 1 ? lastElementRef : null} 
            className="bg-white shadow-lg rounded-2xl p-4 overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={project.images[0]}
              alt={project.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
              <p className="text-lg text-indigo-600 font-bold">${project.price}</p>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {hasNextPage && (
        <div className="flex justify-center mt-6">
        {isFetchingNextPage ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-indigo-600 border-solid"></div>
          </div>
        ) : (
          <div ref={lastElementRef}></div>
        )}
      </div>
    )}
  </div>
      )}
export default Infinite;
