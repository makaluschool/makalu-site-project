import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { url } from "@/lib/api";

const Aboutus = () => {
  return (
    <div>
      <section className="m-5">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <div className="max-w-lg" data-aos="fade-up">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About
                <span className="bg-blue-700 text-white pl-2 pr-2 ml-2 rounded-sm">
                  Makalu School
                </span>
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Makalu English Boarding School is a reputable educational
                institution in Nepal with over 30,000 students enrolled. The
                schools website and mobile app facilitate communication between
                parents and students. With a strong focus on alumni engagement,
                the school encourages graduates to stay involved through
                volunteering, networking, and supporting current students.
              </p>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  <Button className="bg-blue-700 hover:bg-blue-600">
                    Learn more about us<span className="ml-2">&#8594;</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-12 md:mt-0" data-aos="zoom-in">
              <Image
                src={`https://zkmzivycmmcvpqhkdoan.supabase.co/storage/v1/object/public/supabase/files/WhatsApp Image 2024-06-11 at 21.31.29_9c5bea10.jpg-2ca4c6bdb500ce851dbd5eee4d339f35.jpg`}
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
                width={800}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
