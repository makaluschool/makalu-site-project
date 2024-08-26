import React, { useState } from "react";
import { BookOpenText, CircleX, GanttChart } from "lucide-react";
import Link from "next/link";

const Drawerbtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Button */}
      <button
        onClick={toggleDrawer}
        className="text-blue-800 hover:text-blue-600"
      >
        <GanttChart className="w-10 h-10" />
      </button>

      {/* Drawer and Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } bg-black/70`}
        onClick={toggleDrawer}
      >
        <div
          className={`fixed right-0 top-0 h-full w-full md:w-80 bg-white shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          
        >
          {/* Drawer Content */}
          <div className="p-4 h-full flex flex-col">
            <button
              onClick={toggleDrawer}
              className="text-blue-800 hover:text-blue-600 self-end"
            >
              <CircleX className="w-6 h-6" />
            </button>
            <div className="mt-8 ">
              <div className="md:hidden">
            <Link href={"/"} className="">
                <h1 className="text-xl hover:bg-slate-100 hover:text-blue-600 cursor-pointer p-5 rounded-sm m-2 ">
              Home
                </h1>
              </Link>
              <Link href={"/gallery"} className="">
                <h1 className="text-xl hover:bg-slate-100 hover:text-blue-600 cursor-pointer p-5 rounded-sm m-2 ">
                  Gallery
                </h1>
              </Link>
              <Link href={"/blog"} className="">
                <h1 className="text-xl hover:bg-slate-100 hover:text-blue-600 cursor-pointer p-5 rounded-sm m-2 ">
                  Blogs
                </h1>
              </Link>
              <Link href={"/contact"} className="">
                <h1 className="text-xl hover:bg-slate-100 hover:text-blue-600 cursor-pointer p-5 rounded-sm m-2 ">
                  Contact
                </h1>
              </Link>
              </div>
            <Link href={"/about"} className="">
                <h1 className="text-xl hover:bg-slate-100 hover:text-blue-600 cursor-pointer p-5 rounded-sm m-2 ">
                  About Us
                </h1>
              </Link>
             
              <Link href="/events">
                <h1 className="text-xl   hover:bg-slate-100 hover:text-blue-600 cursor-pointer p-5 rounded-sm m-2">
                  Events
                </h1>
              </Link>
              <Link href={"/staffs"} className="">
                <h1 className="text-xl hover:bg-slate-100 hover:text-blue-600 cursor-pointer p-5 rounded-sm m-2 ">
                  Faculty and Staff
                </h1>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawerbtn;
