import PageBanner from '@/components/PageBanner'
import axios from 'axios'
import React from 'react'

const page = async() => {
    const getImages = await axios("http://localhost:1337/api/galleries?populate[0]=gallery_images")
    const images = getImages.data.data[0].attributes.gallery_images.data
   
  return (
    <div className="container">
      <PageBanner name='Gallery'/>
      <div className=" mx-auto p-5 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >
        {images.map((src:any, index:number) => (
          <div key={index} className="overflow-hidden mb-4  rounded-lg" data-aos="fade-up"  data-aos-duration={`${(10000-index*1000)}`} >
            <img
              src={`http://localhost:1337${src.attributes.url}`}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-60 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
              
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default page