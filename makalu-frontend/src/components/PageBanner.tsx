import React from 'react'

export default function PageBanner({name}:{name:string}) {
  return (
    <header className=" rounded-3x text-center py-12 max-w-full flex justify-center ">
        <h1 className="text-4xl font-bold mt-32 bg-yellow-500 lg:bg-blue-800 p-2 pl-5 pr-5 rounded-lg text-white ">{name}</h1>
      </header>
  )
}
