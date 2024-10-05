import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/Map";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-white">
      <PageBanner name={"Contact Us"} />
      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          We are here to help you. Reach out to us via any of the following
          methods.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <Link href="tel:+9779852048899"
            className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors"
            data-aos="fade-right"
            data-aos-duration="10000"
          >
            <h3 className="text-xl font-bold">Call Us</h3>
            <p className="text-gray-700 mt-2">(+977)9852048899</p>
          </Link>
          <Link href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRnZnLPXpvjLLrXhlgkCnBPgVXVvXVbdSQKKJxMWBfMQXgtbwLgtpBtBHGvzXWTLgVgfsTQ"
            className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors"
            data-aos="fade-down"
            data-aos-duration="6000"
          >
            <h3 className="text-xl font-bold">Email Us</h3>
            <p className="text-gray-700 mt-2">makaluschooledu.com.np@gmail.com</p>
          </Link>
          <div
            className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors"
            data-aos="fade-right"
            data-aos-duration="4000"
          >
            <h3 className="text-xl font-bold">Visit Us</h3>
            <p className="text-gray-700 mt-2">Itahari-05, Sunsari</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 px-4">
        <h2
          className="text-2xl font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Send Us A Message
        </h2>
        <ContactForm />
      </section>
      <GoogleMap />
    </div>
  );
};

export default page;
