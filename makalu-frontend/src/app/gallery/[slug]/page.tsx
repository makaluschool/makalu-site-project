import TitleGalleryDetails from '@/components/Gallery/TitleGalleryDetails'
import PageBanner from '@/components/PageBanner'
import axios from 'axios'
import React from 'react'

export  default async function page({ params }: { params: { slug: string } }) {
    const imgTitle = decodeURIComponent(params.slug)
  const blogDataDetails = await axios.get(`http://localhost:1337/api/galleries?filters[Title][$eq]=${imgTitle}&populate=*`)
  const data = (blogDataDetails.data.data)
  return (
    <div><PageBanner name={`${imgTitle}`}/>
    <div className="container">
      {data.map((item:any,index:number)=>{
        return(
          <div key={index}>
            <TitleGalleryDetails data={item.attributes.gallery_images.data}/>
          </div>
        )
      })}
    </div></div>
  )
}
