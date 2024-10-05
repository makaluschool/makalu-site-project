"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function Banner(data: any) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  let dataArr = data?.data;

  return (
    <div className="flex justify-center w-full z-50 mt-28">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {dataArr.map((d: any, index: number) => (
            <CarouselItem key={index}>
              <div className=" mt-10 flex justify-center ">
                <Image
                  src={`${d.attributes.Banner_image.data.attributes.url}`}
                  alt="banner"
                  width={1820}
                  height={700}
                  className="object-contain"
                  priority
                />
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
