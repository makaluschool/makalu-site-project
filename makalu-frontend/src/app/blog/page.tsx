import Blogpost from "@/components/Blog/Blogpost";
import axios from "axios";
import React from "react";

const page = async () => {
  const getCommunityblogData = await axios.get("http://localhost:1337/api/community-blogs?populate[0]=blog_thumbnail&populate[1]=blog_cover_image");
  
  return (
    <div>
      <Blogpost data={getCommunityblogData.data.data}  />
    </div>
  );
};

export default page;
