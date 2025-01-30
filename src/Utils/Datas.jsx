import React from 'react'

const Datas = ({title,content}) => {
  return (
    <>
    
    <section className=" max-w-[1280px] mx-auto py-8 px-6 md:px-12">
      <div className="flex flex-col md:flex-row space-between items-center lg:space-around lg:items-start space-y-6 md:space-y-0 md:space-x-6 lg:w-[60%]">
        <h2 className=" inline font-semibold bg-[#B9FF66] text-gray-800 text-lg md:text-xl p-1 rounded-md ">
          {title}
        </h2>
        <p className="text-gray-600 text-center md:text-left max-w-2xl leading-relaxed">
          {content}
        </p>
      </div>
    </section>
    
    </>
  )
}

export default Datas