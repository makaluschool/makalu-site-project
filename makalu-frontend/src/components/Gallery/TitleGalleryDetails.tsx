import { url } from '@/lib/api'
import Image from 'next/image'
import React from 'react'

export default function TitleGalleryDetails({data}:{data:any}) {
  return (
    <div className=" mx-auto p-5 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item:any,index:number)=>{
            return(
                <div key={index} className="overflow-hidden mb-4  rounded-lg">
                    <Image src={`${item.attributes.url}`} alt={`Gallery Image ${index + 1}`} className="transition-transform duration-300 ease-in-out transform hover:scale-105" width={300} height={200} />
                </div>
            )
        })}
    </div>
  )
}
