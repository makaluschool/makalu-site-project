"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Banner(data:any) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
 
 console.log(data.data)
 
  return (
    <div className="flex justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-[98%]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          { data?.data.map((d:any, index:any) => (
            <CarouselItem key={index}>
              <div className="w-full "style={{backgroundImage:`url(http://localhost:1337${d.attributes.Banner_image.data[0].attributes.url})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
                <div className=" ">
                  <div className="flex items-center justify-center  h-[75vh]">
                    <div className="title">
                    <h3 className="text-4xl font-semibold text-white">{d.attributes.Banner_title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="btn ml-20">
        <div className="previosbtn absolute">
        <CarouselPrevious />
        </div>
        <div className="nextbtn absolute">
        <CarouselNext />
        </div>
        </div>
      
      </Carousel>
    </div>
  );
}
