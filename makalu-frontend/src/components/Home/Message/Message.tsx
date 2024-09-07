import Image from "next/image";
import React from "react";

const Message = ({ data }: any) => {
  return (
    <div className="mt-5">
      <div className="heading flex flex-col justify-center text-center ">
        <h4 className="text-blue-800 font-bold " data-aos="fade-up">What our Leaders Say</h4>
        <div className="flex justify-center" data-aos="fade-up">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold max-w-2xl text-center ">
            Here what our respected associated tells about Makalu School
          </h2>
        </div>
      </div>
      <div className="flex flex-row justify-end items-center p-6 mt-10">
        <p className="max-w-2xl text-xl font-medium text-center md:text-xl lg:text-lg" data-aos="fade-right">
          {data.message}
        </p>
        <footer className="flex flex-col gap-6 mt-6 md:mt-12 ml-10" data-aos="fade-left">
          <Image
            className="flex-shrink-0  border shadow-md rounded-md w-52  border-black/10 object-contain"
            src={data.image}
            alt="Sebastiaan Kloos"
            width={200}
            height={200}
          />
          <h3
            className="inline-block font-bold tracking-tight"
          >
            <p>{data.name}</p>
            <p className="font-medium text-black/60">{data.knownAs}</p>
          </h3>
        </footer>
      </div>
    </div>
  );
};

export default Message;
