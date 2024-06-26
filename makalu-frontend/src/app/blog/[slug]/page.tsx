import axios from "axios";
import React from "react";

async function page({ params }: { params: { slug: string } }) {
 
  const blogTitle = decodeURIComponent(params.slug)
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        
            <div className="max-w-3xl mx-auto">
            <div className="py-8">
              <h1 className="text-3xl font-bold mb-2">{blogTitle}</h1>
              <p className="text-gray-500 text-sm">
                Published on April 5, 2022
              </p>
            </div>
  
           {/*  <img
               src={`http://localhost:1337${d.blog_thumbnail.data.attributes.url}`}
              alt="Featured image"
              className="w-full h-auto mb-8"
            /> */}
  
            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
              <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem dicta eum quaerat harum voluptatibus qui alias cupiditate architecto nobis modi. Iusto assumenda quibusdam corrupti facilis aspernatur omnis rem cumque libero.
              </p>
             
            </div>
          </div>

        
      </div>
    </div>
  );
}

export default page;
