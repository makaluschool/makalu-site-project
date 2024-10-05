import Link from "next/link";
import React from "react";

const Toptipnav = () => {
  return (
    <div className="bg-yellow-500 p-[0.3rem] flex justify-around pt-5 pb-2 m-1 rounded-lg shadow-lg">
       <div className="contacts text-sm flex gap-4">
            <Link
              href="tel:+97798520488999"
              className="flex text-black font-bold hover:text-white"
            >
              <p className="mr-1 ">Phone:</p>
              <p
                aria-label="Our phone"
                title="Our phone"
                className=""
              >
                (+977)9852048899
              </p>
            </Link>
            <Link
              href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRnZnLPXpvjLLrXhlgkCnBPgVXVvXVbdSQKKJxMWBfMQXgtbwLgtpBtBHGvzXWTLgVgfsTQ"
              className="flex font-semibold hover:text-white "
            >
              <p className="mr-1">Email:</p>
              <p
                aria-label="Our email"
                title="Our email"
                className=" "
              >
                makaluschooledu.com.np@gmail.com
              </p>
            </Link>
            {/* <Link href="http://localhost:3000/contact" className="flex font-bold hover:text-white">
              <p className="mr-1 text-gray-800">Address:</p>
              <p
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Itahari-05, Sunsari
              </p>
            </Link> */}
          </div>
      <div className="social">
     
      <div className="flex items-center  space-x-3 ">
              {/* <a
                href="/"
                className="text-white transition-colors duration-300 hover:text-blue-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                </svg>
              </a> */}
              <a
                href="/"
                className="text-white transition-colors duration-300 hover:text-orange-500"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4"></circle>
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100040895302557"
                target="_blank"
                className="text-white transition-colors duration-300 hover:text-blue-600"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                </svg>
              </a>
            </div>
      </div>
    </div>
  );
};

export default Toptipnav;
