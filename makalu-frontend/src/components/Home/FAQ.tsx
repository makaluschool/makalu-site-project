import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQData } from "@/lib/Data/FAQData";
function FAQ() {
  return (
    <div id="faq" className="mt-10">
      <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4 bg-blue-600 text-white p-1 rounded-sm shadow-sm">
            School FAQ
          </p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>
        <div className="basis-1/2 w-full">
          <Accordion type="single" collapsible className="w-full ">
            {FAQData.map((data, index) => (
                     <AccordionItem value={`item-${index}`} className="">
                     <AccordionTrigger><h2 className=" text-left">{data.question}</h2></AccordionTrigger>
                     <AccordionContent>
                       {data.answer}
                     </AccordionContent>
                   </AccordionItem>
            ))}
           
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQ;