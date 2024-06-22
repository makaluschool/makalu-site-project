"use client"
import React from 'react'

const Blogpostdata = ({data}:any) => {
    console.log(data)
  return (
    <div className="mt-24">
      <div className="max-w-7xl mx-auto my-8 px-2 ">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
          <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-blue-400 hover:cursor-pointer">
            <a className="relative" href="/tool/writey-ai">
              <img
                className="rounded relative w-full object-cover aspect-video"
                src={`http://localhost:1337${data.blog_thumbnail.data.attributes.url}`}
                alt="Writey A.I"
                loading="lazy"
              />
            </a>

            <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
              <a
                href="/tool/writey-ai"
                className="flex justify-center items-center text-xl font-semibold text-black hover:text-blue-800 two-lines text-ellipsis"
              >
               
                <small className="font-bold text-xl ">
                {data.blog_title}
                </small>
              </a>

              <p className="text-gray-600 two-lines  h-40 pb-5  text-ellipsis overflow-hidden ... ">
               {data.blog_content}
              </p>

              
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Blogpostdata