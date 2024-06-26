import PageBanner from '@/components/PageBanner'
import React from 'react'

const page = () => {
  return (
    <div className="bg-white">
      <PageBanner name={"Contact Us"} />
      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">We are here to help you. Reach out to us via any of the following methods.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
          <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
            <h3 className="text-xl font-bold">Call Us</h3>
            <p className="text-gray-700 mt-2">(+977)9852048899</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
            <h3 className="text-xl font-bold">Email Us</h3>
            <p className="text-gray-700 mt-2">mebs2057@gmail.com</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
            <h3 className="text-xl font-bold">Visit Us</h3>
            <p className="text-gray-700 mt-2">Itahari-05, Sunsari</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Send Us A Message</h2>
        <form className="max-w-2xl mx-auto mt-8 space-y-8">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold">Name</label>
            <input type="text" id="name" className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
            <input type="email" id="email" className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-bold">Message</label>
            <textarea id="message" className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors">Send Message</button>
        </form>
      </section>
     
     
    </div>
  )
}

export default page