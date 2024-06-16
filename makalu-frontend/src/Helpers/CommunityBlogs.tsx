import Community from "@/components/Home/Community";
import React from "react";

const CommunityBlogs = ({ data }: any) => {
  return (
    <div>
      <div className="m-10 p-10">
        <div className="title">
          <h2 className="font-bold text-3xl">Our Community</h2>
        </div>
        <div className="blogs">
          <div className="w-full dark:bg-gray-800">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-xl p-2 font-bold tracking-tight text-white sm:text-4xl bg-blue-600  rounded-lg px ">
                  <span className="font-[300]">From the</span>
                 School Blog
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Explore the world of education and learning with our insightful blog posts at Makalu Engineering Boarding School.
                </p>
              </div>
              <div className="div grid grid-col-1 lg:grid-cols-3 w-full mx-auto mt-8  max-w-2xl auto-rows-fr gap-8 sm:mt-12 lg:mx-0 lg:max-w-none ">
                {data.map((item: any) => (
                  <Community key={item.id} data={item.attributes} />
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
