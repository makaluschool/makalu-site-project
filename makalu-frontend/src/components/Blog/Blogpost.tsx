
import React from 'react'
import Blogpostdata from './Blogpostdata'
import PageBanner from '../PageBanner'

const Blogpost = ({data}:any) => {
  return (
    <>  <PageBanner name={"Blogs"} />
   <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 flex-wrap '>
    {data.map((d:any, index:number) => (
        <Blogpostdata key={index}  data={d.attributes} />
    ))}
   </div>
   </>
  )
}

export default Blogpost