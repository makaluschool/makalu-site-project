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
import { plugin } from "postcss";

export function Banner(data: any) {
  return (
    <div className="flex justify-center w-full z-50 mt-20">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {data?.data.map((d: any, index: number) => (
            <CarouselItem key={index}>
              <div className=" mt-10 flex justify-center ">
                <Image
                  src={`http://localhost:1337${d.attributes.Banner_image.data[0].attributes.url}`}
                  alt="banner"
                  width={1820}
                  height={700}
                  className=""
                  objectFit="contain"
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
