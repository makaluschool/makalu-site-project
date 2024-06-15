import React from 'react'

const NumberBanner = () => {
  return (
    <div className='bg-gray-100 m-5 p-5 rounded-lg flex flex-col text-center '>
        <div className="title mt-5">
            <h4 className='font-semibold'>Our 5+ years of</h4>
            <h2 className='font-bold text-3xl'>Hardwork & Achievements</h2>
        </div>
        <div className="display-data m-2 p-5 flex flex-col sm:flex-row md:justify-around mt-10 w-full whitespace-wrap gap-2">
            <div className="md:pl-8 md:pr-8 md:transition ease-in-out duration-500 transform scale-100 active:scale-110 md:cursor-pointer rounded-xl hover:bg-gray-200 p-3 m-2 ">
                <h2 className="value text-blue-700 font-bold text-xl lg:text-2xl md:whitespace-nowrap">30,000+</h2>
                <h4 className='font-semibold text-lg'>Students Enrolled</h4>
            </div>
            <div className="md:pl-8 md:pr-8 md:transition ease-in-out duration-500 transform scale-100 active:scale-110 md:cursor-pointer rounded-xl hover:bg-gray-200 p-3 m-2">
                <h2 className="value text-blue-700 font-bold text-xl lg:text-2xl md:whitespace-nowrap" >25+</h2>
                <h4 className='font-semibold text-lg'>Teaching Staffs</h4>
            </div>
            <div className="md:pl-8 md:pr-8 md:transition ease-in-out duration-500 transform scale-100 active:scale-110 md:cursor-pointer rounded-xl hover:bg-gray-200 p-3 m-2">
                <h2 className="value text-blue-700 font-bold text-xl lg:text-2xls md:whitespace-nowrap">5+</h2>
                <h4 className='font-semibold text-lg'>Awards & Recognition</h4>
            </div>
        
        </div>
    </div>
  )
}

export default NumberBanner