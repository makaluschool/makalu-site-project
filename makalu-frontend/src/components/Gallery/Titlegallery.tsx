import Link from 'next/link'
import React from 'react'

export default function Titlegallery({title}:{title:string}) {
  return (
    <Link href={`/gallery/${title}`}><div className="border border-gray-300 hover:bg-blue-200 rounded-lg p-4 hover:shadow-md w-auto h-auto  cursor-pointer  ">
        <h2 className='text-center font-semibold text-md'>{title}</h2>
        </div></Link>
  )
}
