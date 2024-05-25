import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <nav className ="bg-white border border-sky-500 px-3">
    <div className ="flex justify-between items-center">
        <div className ="flex items-center h-40px mr-20px ml-10px">
            <img src="C:\Users\Nts\Desktop\frontend\makalulogo.jpg" alt="Makalu logo" className ="logo"/>
            <span className="text-lg font-bold text-blue-900 border border-black">Makalu English Boarding School</span>
        </div>
        <div className="ml-30px md:hidden"><a className="font-bold text-blue-900 text-base" href="#menu">&#9776;</a>
        </div>
      
        <ul className ="list-none	m-0	p-1 justify-between w-[40%] hidden md:flex ">
            <li className="ml-30px"> <a className="no-underline font-bold text-blue-900 text-base" href="#admission">ADMISSION</a></li>
            <li className="ml-30px"> <a className="no-underline font-bold text-blue-900 text-base" href="#inquire">INQUIRE</a></li>
            <li className="ml-30px"> <a className="no-underline font-bold text-blue-900 text-base" href="#apply">APPLY</a></li>
            <li className="ml-30px"> <a className="no-underline font-bold text-blue-900 text-base" href="#give">GIVE</a></li>
            <li className="ml-30px"><a className="no-underline font-bold text-blue-900 text-base" href="#menu">MENU</a></li>
            <li className="ml-30px"><a className="font-bold text-blue-900 text-base hidden" href="#menu">&#9776;</a></li>
        </ul>
    </div>
</nav>
    </div>
  );
};

export default Navbar;
