"use client";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Drawerbtn from "./Drawerbtn";
import { user } from "@/types/global";
import { useState } from "react";
import Toptipnav from "./Toptipnav";

const Nav = () => {
  /*  const [user, setuser] = useState<user>({name:"sohan"});
  console.log(user) */
  return (
    <nav className="bg-white shadow-md">
      <div className="topnav hidden lg:block">
        <Toptipnav />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 p-5 lg:px-8 md:p-5">
        <div className="flex justify-between h-8">
          <Link href={"/"} className="flex items-center">
            <img
              className="h-8 sm:h-8 lg:h-12 w-auto"
              src="/images/makalu-logo.jpg"
              alt="Makalu Logo"
            />
            <span className="font-semibold text-md text-blue-800 ml-2 md:text-lg lg:text-xl ">
              Makalu English Boarding School
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8 text-[12px] lg:text-[14px] font-bold">
            <Link
              href="/admission"
              className="text-blue-800 hover:text-blue-600"
            >
              ADMISSION
            </Link>
            <Link
              href="/inquire"
              className="text-blue-800 hover:text-blue-600"
            >
              INQUIRE
            </Link>
            <Link
              href="/apply"
              className="text-blue-800 hover:text-blue-600"
            >
              APPLY
            </Link>
            <Link
              href="/give"
              className="text-blue-800 hover:text-blue-600 font-semibold"
            >
              GIVE
            </Link>
            <Drawerbtn />
          </div>
          <div className="flex items-center md:hidden">
            <Drawerbtn />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
