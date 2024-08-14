"use client";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Drawerbtn from "./Drawerbtn";
import { user } from "@/types/global";
import { useEffect, useState } from "react";
import Toptipnav from "./Toptipnav";

const Nav = () => {
  /*  const [user, setuser] = useState<user>({name:"sohan"});
  console.log(user) */
  const [isScrolled, setIsScrolled] = useState(false);
  console.log(isScrolled)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white  fixed top-0 left-0 right-0 z-10 ${isScrolled ? 'shadow-md' : ''} `}>
      <div className="topnav hidden lg:block">
        <Toptipnav />
      </div>
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 p-5 lg:px-8 md:p-5">
        <div className="flex justify-between ">
          <Link href={"/"} className="flex items-center">
            <img
              className="h-8 sm:h-8 lg:h-12 w-auto"
              src="/images/makalu-logo.jpg"
              alt="Makalu Logo"
            />
            <span className="font-semibold text-md text-blue-800 ml-2 md:text-lg lg:text-2xl ">
              Makalu English Boarding School
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8 text-[12px] lg:text-[14px] font-bold">
            <Link
              href="/admission"
              className="text-blue-800 hover:text-blue-600 "
            >
              ADMISSION
            </Link>
            <Link
              href="/gallery"
              className="text-blue-800 hover:text-blue-600"
            >
              Gallery
            </Link>
            <Link
              href="/blog"
              className="text-blue-800 hover:text-blue-600"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-blue-800 hover:text-blue-600 font-semibold"
            >
              Contact
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
