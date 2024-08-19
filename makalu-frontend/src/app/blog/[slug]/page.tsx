import axios from "axios";
import React from "react";

async function page({ params }: { params: { slug: string } }) {
 
  const blogTitle = decodeURIComponent(params.slug)
  const blogDataDetails = await axios.get(`http://localhost:1337/api/community-blogs?filters[blog_title][$eq]=${blogTitle}&populate=*`)
  const data = (blogDataDetails.data.data)
  return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {data.map((d:any, index:number) => {
    const publishedAt = new Date(d.attributes.publishedAt)
  return(
      <div className="max-w-3xl mx-auto mt-40">
      <div className="py-8">
          <h1 className="text-3xl font-bold mb-2">{d.attributes.blog_title}</h1>
          <p className="text-gray-500 text-sm">Published on <time >{publishedAt.toLocaleDateString()}</time></p>
      </div>

      <img src={`http://localhost:1337${d.attributes.blog_cover_image.data.attributes.url}`} alt="Featured image" className="w-full h-[28rem] mb-8 object-cover"/>

      <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
          {d.attributes.blog_content}
      </div>
  </div>
  )})}
    
</div>

  );
}

export default page;
