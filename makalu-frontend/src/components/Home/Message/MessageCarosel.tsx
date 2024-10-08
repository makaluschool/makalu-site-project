import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Message from "./Message";
import { MessageData } from "@/lib/Data/MessageData";

export function MessageCarosel() {
  return (
    <div className="flex justify-center m-5 mt-20">
      <Carousel className="w-[100%]">
        <CarouselContent>
          {MessageData.map((data, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="p-5 mt-10">
                    <Message data={data} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
