import Titlegallery from '@/components/Gallery/Titlegallery'
import PageBanner from '@/components/PageBanner'
import axios from 'axios'
import React from 'react'

const page = async() => {
    const getImages = await axios("http://localhost:1337/api/galleries?filters[Title][$eq]=gallery&populate=*")
    const images = getImages.data.data[0].attributes.gallery_images.data
   const titleImages = await axios("http://localhost:1337/api/galleries?filters[Title][$not]=gallery")
  return (
    <div className="container">
      <PageBanner name='Gallery'/>
      <div className="flex flex-wrap  gap-4">
      {titleImages.data.data.map((image:any,index:number)=>{
        return(
          <div key={index} className=' max-w-[20rem]'>
            <Titlegallery title = {image.attributes.Title} />
          </div>
        )
      })}
      </div>
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