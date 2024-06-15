import Community from "@/components/Home/Community";
import React from "react";

const CommunityBlogs = ({ data }: any) => {
  return (
    <div>
      <div className="m-5 p-5">
        <div className="title">
          <h2 className="font-bold text-3xl">Our Community</h2>
        </div>
        <div className="blogs">
          <div className="w-full dark:bg-gray-800">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  From The Blog
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  Dive into the latest in technology with our insightful blog
                  posts.
                </p>
              </div>
              <div className="div ">
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
