import React, { useState } from "react";
import ReactPaginate from "react-paginate";

function Pagination({ items }) {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentItems.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-red-800">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.body}</p>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center mt-8"
        pageClassName="mx-1"
        pageLinkClassName="px-3 py-1 border rounded"
        previousClassName="mx-1"
        previousLinkClassName="px-3 py-1 border rounded"
        nextClassName="mx-1"
        nextLinkClassName="px-3 py-1 border rounded"
        activeClassName="bg-blue-500 text-white"
      />
    </>
  );
}

export default Pagination;