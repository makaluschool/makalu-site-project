import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Aboutus = () => {
  return (
    <div ><section className="m-5">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <div className="max-w-lg" data-aos="fade-up">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About <span className='bg-blue-800 text-white pl-1 pr-1 rounded-sm'>Makalu School</span></h2>
                <p className="mt-4 text-gray-600 text-lg">Makalu English Boarding School is a reputable educational institution in Nepal with over 30,000 students enrolled. The school's website and mobile app facilitate communication between parents and students. With a strong focus on alumni engagement, the school encourages graduates to stay involved through volunteering, networking, and supporting current students.</p>
                <div className="mt-8">
                    <Link href="/about" className="text-blue-500 hover:text-blue-600 font-medium"><Button className='bg-blue-800 hover:bg-blue-600' >Learn more about us<span className="ml-2">&#8594;</span></Button>
                        </Link>
                </div>
            </div>
            <div className="mt-12 md:mt-0" data-aos="zoom-in">
                <img src="http://localhost:1337/uploads/Whats_App_Image_2024_06_11_at_21_31_29_9c5bea10_972e68efcf.jpg" alt="About Us Image" className="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section></div>
  )
}

export default Aboutus