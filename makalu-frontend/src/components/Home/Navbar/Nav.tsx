"use client"
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import Drawerbtn from './Drawerbtn';

const Nav= () => {

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img className="h-8 w-auto" src="/images/makalu-logo.jpg" alt="Makalu Logo" />
            <span className="font-semibold text-xl text-blue-800 ml-2 ">Makalu English Boarding School</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/admission" className="text-blue-800 hover:text-blue-600 font-semibold">

            ADMISSION
            </Link>
            <Link href="/inquire" className="text-blue-800 hover:text-blue-600 font-semibold">
            INQUIRE
            </Link>
            <Link href="/apply" className="text-blue-800 hover:text-blue-600 font-semibold">
            APPLY
            </Link>
            <Link href="/give" className="text-blue-800 hover:text-blue-600 font-semibold">
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
