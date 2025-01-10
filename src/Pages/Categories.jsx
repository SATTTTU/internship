import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Categories() {
    let cid=useParams();
    let [data,setData]=useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/1/photos/${cid}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setData(data.products || []);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, [cid]);
  return (
    <>
    <h1>{cid}</h1>
      <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {ano. slice(0,8).map((value) => (
          <div key={value.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-red-500">{value.title}</h2>
              <p className="text-green-600 mb-4"> Email:{value.url}</p>
              <p className="text-blue-600 mb-4"><img src={value.thumbnailUrl} alt="" /></p>
             <Link to="/Categories" className='button'>About Us </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </>
  )
}

export default Categories