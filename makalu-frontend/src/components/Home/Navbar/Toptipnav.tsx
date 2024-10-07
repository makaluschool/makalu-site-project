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
          <p aria-label="Our phone" title="Our phone" className="">
            (+977)9852048899
          </p>
        </Link>
        <Link
          href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRnZnLPXpvjLLrXhlgkCnBPgVXVvXVbdSQKKJxMWBfMQXgtbwLgtpBtBHGvzXWTLgVgfsTQ"
          className="flex font-semibold hover:text-white "
        >
          <p className="mr-1">Email:</p>
          <p aria-label="Our email" title="Our email" className=" ">
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
          <a
            href="https://www.tiktok.com/@makaluschool?_t=8qI8p5wkElU&_r=1"
            className="text-white transition-colors duration-300 hover:text-red-800 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0 0 30 30"
            >
              <path
                fill="currentColor"
                d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/makaluenglishboarding/"
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
