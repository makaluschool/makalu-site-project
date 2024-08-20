import PageBanner from '@/components/PageBanner';
import { FormatTime } from '@/Helpers/FormatTime';
import axios from 'axios';
import { Clock10Icon } from 'lucide-react';
import React from 'react'

export default async function page() {
  const getEventsData = await axios.get("http://localhost:1337/api/upcoming-events");
  //arrange data by date and time
  const data = getEventsData.data.data.sort((a: any, b: any) => {
    console.log(new Date(a.attributes.Event_date).getTime()- new Date(b.attributes.Event_date).getTime());
    return new Date(a.attributes.Event_date).getTime() - new Date(b.attributes.Event_date).getTime();
  });

  return (
    <div><PageBanner name='Events'/>
    <div className="container flex justify-center items-center" >
      <h1 className=" text-gray-400 font-bold text-md">Total Events : {getEventsData.data.data.length}</h1>
    </div>
    <div className=" m-2 md:m-5 p-5 md:p-10 " >
      {data.map((d: any, index: number) => {
        const fromtime = FormatTime(d.attributes.From_event_time);
        const totime = FormatTime(d.attributes.To_event_time);
        return (
          <div
          data-aos="fade-up"
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
              <h2 className="text-2xl font-bold">{d.attributes.Event_title}</h2>
            </div>
            <div className="desc">
              <p className='text-gray-500 text-sm'>{d.attributes.Event_desc}</p>
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
  )
}
