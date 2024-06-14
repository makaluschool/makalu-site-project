import React from 'react'

const NumberBanner = () => {
  return (
    <div className='bg-gray-100 m-5 p-5 rounded-lg flex flex-col text-center '>
        <div className="title mt-5">
            <h4 className='font-semibold'>Our 5+ years of</h4>
            <h2 className='font-bold text-3xl'>Hardwrok & Achievements</h2>
        </div>
        <div className="display-data m-2 p-5 flex justify-around mt-10 w-full">
            <div className="std-enroll">
                <h2 className="value text-blue-700 font-bold text-xl">30,000+</h2>
                <h4 className='font-semibold text-lg'>Students Enrolled</h4>
            </div>
            <div className="teaching-staff">
                <h2 className="value text-blue-700 font-bold text-xl" >25+</h2>
                <h4 className='font-semibold text-lg'>Teaching Staffs</h4>
            </div>
            <div className="award">
                <h2 className="value text-blue-700 font-bold text-xl">5+</h2>
                <h4 className='font-semibold text-lg'>Awards & Recognition</h4>
            </div>
        
        </div>
    </div>
  )
}

export default NumberBanner