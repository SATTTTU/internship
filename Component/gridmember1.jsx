import React from 'react';

function GridMember1() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <section className="py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-orange-500 text-white p-6 rounded-lg flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold mb-4">
                Create and Schedule Content <span className="italic">Quicker</span>
              </h1>
              <button className="bg-white text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white transition">
                Create Post
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default GridMember1;
