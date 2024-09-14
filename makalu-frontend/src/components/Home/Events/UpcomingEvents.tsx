import { ChevronsDown } from "lucide-react";
import React from "react";
import DisplayEvents from "./DisplayEvents";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const UpcomingEvents = ({ data }: any) => {
  const filterDataWithDate = data.filter((item: any, index: number) => {
    const formatedDate = new Date();
    const eventDate = new Date(item.attributes.Event_date); // Convert Event_date to Date object
    return eventDate > formatedDate;
  });
  
  return (
    <div className="bg-blue-50 p-10 md:m-16 mt-10 rounded-lg">
      <div className="">
        <div className="titile sm:flex justify-between ">
          <div className="div text-3xl max-w-96 flex gap-3">
            <h1 className="font-[300]">
              {filterDataWithDate.length} UPCOMING{" "}
              <span className="font-bold text-blue-800">EVENTS</span>
            </h1>
            <span className="text-yellow-400 hidden sm:block self-center font-bold">
              <ChevronsDown fontFamily="600" fontSize={"2rem"} />
            </span>
          </div>
          <div className="viewallbtn transform transition duration-300 ease-in-out scale-100 active:scale-95">
            <Link href={`/events`}>
              <Button className="bg-blue-700 hover:bg-blue-600 text-white">
                View all Events
              </Button>
            </Link>
          </div>
        </div>
        <div className="display event">
          <DisplayEvents data={data} />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
