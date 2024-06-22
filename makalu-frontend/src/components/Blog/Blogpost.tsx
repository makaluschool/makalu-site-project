
import React from 'react'
import Blogpostdata from './Blogpostdata'

const Blogpost = ({data}:any) => {
    
  return (
   <div>
    {data.map((d:any, index:number) => (
        <Blogpostdata key={index}  data={d.attributes} />
    ))}
   </div>
  )
}

export default Blogpost