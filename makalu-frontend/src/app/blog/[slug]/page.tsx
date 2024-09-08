import { blogDetailsData } from "@/lib/request";
import Image from "next/image";
import React from "react";

export const dynamic = 'force-dynamic';

async function page({ params }: { params: { slug: string } }) {
  const blogTitle = decodeURIComponent(params.slug)
  const data = await blogDetailsData({blogTitle: blogTitle})
  return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {data.map((d:any, index:number) => {
    const publishedAt = new Date(d.attributes.publishedAt)
  return(
      <div className="max-w-3xl mx-auto mt-40" key={index}>
      <div className="py-8">
          <h1 className="text-3xl font-bold mb-2">{d.attributes.blog_title}</h1>
          <p className="text-gray-500 text-sm">Published on <time >{publishedAt.toLocaleDateString()}</time></p>
      </div>

      <Image src={`${d.attributes.blog_cover_image.data.attributes.url}`} alt="Featured image" className="mb-8 object-cover" width={1000} height={800} />

      <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
          {d.attributes.blog_content}
      </div>
  </div>
  )})}
    
</div>

  );
}

export default page;
