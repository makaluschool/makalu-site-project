"use client";
import { FormatTime } from "@/Helpers/FormatTime";
import { Clock10Icon } from "lucide-react";
import React from "react";

const DisplayEvents = ({ data }: any) => {
  if (data.length === 0)
    return <div className="bg-white m-5 p-10">No events</div>;
  return (
    <div className=" m-2 md:m-5 p-5 md:p-10 ">
      {data.map((d: any, index: number) => {
        const fromtime = FormatTime(d.attributes.From_event_time);
        const totime = FormatTime(d.attributes.To_event_time);
        return (
        <div key={index} className="hover:text-blue-600 cursor-pointer p-5 mb-5 bg-white rounded-md">
          <div className="for-date">
            <h3 className="text-lg  mb-1">
              Events Date:<span className="text-md pl-1 font-semibold">{d.attributes.Event_date}</span>{" "}
            </h3>
          </div>
          <div className="title ">
            <h2 className="text-2xl font-bold">{d.attributes.Event_title}</h2>
          </div>
          <div className="desc">
            <p>{d.attributes.Event_description}</p>
          </div>
          <div className="time flex  gap-2 mt-2 text-gray-500">
            <Clock10Icon />
            <p className="w-32">{`${fromtime}-${totime}`}</p>
          </div>
        </div>
      )})}
    </div>
  );
};

export default DisplayEvents;
