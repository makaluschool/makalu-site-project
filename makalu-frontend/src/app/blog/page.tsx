import Blogpost from "@/components/Blog/Blogpost";
import { blogData } from "@/lib/request";
import axios from "axios";
import React from "react";

export const dynamic = 'force-dynamic';

const page = async () => {
  const getCommunityblogData = await blogData();
  
  return (
    <div>
      <Blogpost data={getCommunityblogData.data.data}  />
    </div>
  );
};

export default page;
