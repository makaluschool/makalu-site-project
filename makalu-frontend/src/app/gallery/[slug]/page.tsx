import TitleGalleryDetails from '@/components/Gallery/TitleGalleryDetails'
import PageBanner from '@/components/PageBanner'
import {  galleryDetailsData } from '@/lib/request'
import React from 'react'

export  default async function page({ params }: { params: { slug: string } }) {
    const imgTitle = decodeURIComponent(params.slug)
    const data = await galleryDetailsData({imgTitle: imgTitle})
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
