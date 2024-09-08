import PageBanner from "@/components/PageBanner";
import { FormatTime } from "@/Helpers/FormatTime";
import { eventsData } from "@/lib/request";
import axios from "axios";
import { Clock10Icon } from "lucide-react";
import React from "react";

export const dynamic = 'force-dynamic';

export default async function page() {
  const getEventsData = await eventsData();
  //arrange data by date and time
  const data = getEventsData.data.data.sort((a: any, b: any) => {
    return (
      new Date(a.attributes.Event_date).getTime() -
      new Date(b.attributes.Event_date).getTime()
    );
  });
  const formatedDate = new Date()
  const filterDataWithDate = data.filter((item: any, index: number) => {
    let event_date = new Date(item.attributes.Event_date)
    return event_date > formatedDate;
  });

  return (
    <div>
      <PageBanner name="Events" />
      <div className="container flex justify-center items-center">
        <h1 className=" text-gray-400 font-bold text-md">
          Total Events : {filterDataWithDate.length}
        </h1>
      </div>
      <div className=" m-2 md:m-5 p-5 md:p-10 ">
        {filterDataWithDate.map((d: any, index: number) => {
          const fromtime = FormatTime(d.attributes.From_event_time);
          const totime = FormatTime(d.attributes.To_event_time);
          return (
            <div
              data-aos="fade-up"
              data-aos-duration={`${10000 - index * 1000}`}
              key={index}
              className="hover:text-yellow-500 cursor-pointer p-5 mb-5 bg-white rounded-md"
            >
              <div className="for-date">
                <h3 className="text-lg  mb-1 ">
                  Events Date:
                  <span className="text-md pl-1 font-semibold">
                    {d.attributes.Event_date}
                  </span>{" "}
                </h3>
              </div>
              <div className="title ">
                <h2 className="text-2xl font-bold">
                  {d.attributes.Event_title}
                </h2>
              </div>
              <div className="desc">
                <p className="text-gray-500 text-sm">
                  {d.attributes.Event_desc}
                </p>
              </div>
              <div className="time flex  gap-2 mt-2 text-gray-500">
                <Clock10Icon />
                <p className="w-36">{`${fromtime}-${totime}`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
