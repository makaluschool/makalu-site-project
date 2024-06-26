"use client";
import Link from "next/link";
import React from "react";

const Blogpostdata = ({ data }: any) => {
  console.log(data);
  return (
    <div className="">
      <div className="max-w-7xl mx-auto my-8 px-1 w-[28rem] ">
        <Link className="relative" href={`/blog/${data.blog_title}`}>
          <ul className=" p-2 xl:p-5  ">
            <li className="relative bg-white flex flex-col justify-between  h-[26rem] p-1  rounded shadow-md hover:shadow-blue-100 hover:cursor-pointer  ">
              <img
                className="rounded relative w-full object-cover aspect-video"
                src={`http://localhost:1337${data.blog_thumbnail.data.attributes.url}`}
                alt="Writey A.I"
                loading="lazy"
              />

              <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
                <div className="flex justify-center items-center text-xl font-semibold text-black hover:text-blue-800 two-lines ">
                  <small className="font-bold text-xl ">
                    {data.blog_title}
                  </small>
                </div>

                <p className="text-gray-600 two-lines  h-[6rem] overflow-hidden  ">
                  {data.blog_content}
                </p>
              </div>
            </li>
          </ul>
        </Link>
      </div>
    </div>
  );
};

export default Blogpostdata;
