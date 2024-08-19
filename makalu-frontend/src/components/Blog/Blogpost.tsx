
import React from 'react'
import Blogpostdata from './Blogpostdata'
import PageBanner from '../PageBanner'

const Blogpost = ({data}:any) => {
  return (
    <>  <PageBanner name={"Blogs"} />
   <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 flex-wrap '>
    {data.map((d:any, index:number) => (
        <Blogpostdata key={index}  data={d.attributes} />
    ))}
   </div>
   </>
  )
}

export default Blogpost