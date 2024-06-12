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

export function Banner() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="flex justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-[98%]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-6  h-[70vh]">
                    <span className="text-4xl font-semibold">a</span>
                  </CardContent>
                </Card>
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
