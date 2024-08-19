import Community from "@/components/Home/Community";
import { Button } from "@/components/ui/button";
import { CircleArrowRight, CircleChevronRight } from "lucide-react";
import React from "react";

const CommunityBlogs = ({ data }: any) => {
  const filterData = data.filter((item: any, index: number) => index < 3);
  
  return (
    <div>
      <div className="sm:m-10 sm:p-10">
        <div className="title flex justify-center sm:ml-[-7rem]">
          <h2 className="font-bold text-3xl w-36  shadow-md p-5 sm:whitespace-nowrap rounded-lg m-10">Our <span className="bg-blue-800 rounded-md text-white sm:p-2">Community</span></h2>
        </div>
        <div className="blogs ">
          <div className="w-full dark:bg-gray-800 flex ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-xl p-2 font-bold tracking-tight  sm:text-4xl  rounded-lg px text-blue-800 ">
                  <span className="font-[300] px-2 text-black">From the</span>
                 School Blog
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Explore the world of education and learning with our insightful blog posts at Makalu English Boarding School.
                </p>
              </div>
              <div className="div grid grid-col-1 lg:grid-cols-3 w-full mx-auto mt-8  max-w-2xl auto-rows-fr gap-3   sm:mt-12 lg:mx-0 lg:max-w-none ">
                {filterData.map((item: any,index:number) => (
                  <Community key={item.id} data={item.attributes} index={index} />
                ))}
              </div>
              
            </div>
            
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default CommunityBlogs;
