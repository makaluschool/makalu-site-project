import { ChevronsDown } from "lucide-react";
import React from "react";
import DisplayEvents from "./DisplayEvents";
import { Button } from "@/components/ui/button";

const UpcomingEvents = ({data}:any) => {
  return (
    <div className="bg-gray-100 p-10 m-5 mt-10 rounded-lg">
      <div className="">
        <div className="titile sm:flex justify-between ">
          <div className="div text-3xl max-w-96 flex gap-3">
            <h1 className="font-[300]">
              UPCOMING <span className="font-bold text-blue-800">EVENTS</span>
            </h1>
            <span className="text-yellow-500 hidden sm:block self-center font-bold">
              <ChevronsDown fontFamily="600" fontSize={"1.5rem"} />
            </span>
          </div>
          <div className="viewallbtn transform transition duration-300 ease-in-out scale-100 active:scale-95">
            <Button className="bg-blue-700 hover:bg-blue-600 text-white">View all Events</Button>
          </div>
        </div>
        <div className="display event">
          <DisplayEvents data = {data}/>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
