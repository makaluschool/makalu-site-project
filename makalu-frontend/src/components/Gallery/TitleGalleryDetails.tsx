import React from 'react'

export default function TitleGalleryDetails({data}:{data:any}) {
  return (
    <div className=" mx-auto p-5 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item:any,index:number)=>{
            return(
                <div key={index} className="overflow-hidden mb-4  rounded-lg">
                    <img src={`http://localhost:1337${item.attributes.url}`} alt={`Gallery Image ${index + 1}`} className="w-full h-60 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105" />
                </div>
            )
        })}
    </div>
  )
}
