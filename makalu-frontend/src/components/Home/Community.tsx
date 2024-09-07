"use client";
import { url } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Community = ({ data,index }: any) => {
  const isoDate = data.createdAt;
  const date = new Date(isoDate);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-GB", options);

  // Output: 15 June 2024
  let animateBlog = ["flip-left","fade-up","flip-right"]

  return (
    <div data-aos={animateBlog[index]} className="div">
    <div  className="transform transition duration-500 hover:scale-105  lg:w-[21rem] lg:ml-[3rem] ">
      <article className=" relative isolate flex flex-col justify-end overflow-hidden rounded-3xl  bg-gray-900 dark:bg-gray-700 px-6 py-6 pb-8 pt-80 sm:pt-48 lg:pt-80">
        <Image
          src={`${data.blog_thumbnail.data?.attributes.url}`}
          alt="image"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          width={300}
          height={200}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
        <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          <time dateTime="2023-10-11" className="mr-8">
            {formattedDate}
          </time>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
          <Link href={`/blog/${data.blog_title}`}>
            <span className="absolute inset-0"></span>
            {data.blog_title}
          </Link>
        </h3>
      </article>
    </div>
    </div>
  );
};

export default Community;
