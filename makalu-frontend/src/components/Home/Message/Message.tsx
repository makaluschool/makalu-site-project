import React from 'react'

const Message = ({data}:any) => {
  return (
    <div><blockquote className="flex flex-col items-center p-4">
    <p className="max-w-4xl text-xl font-medium text-center md:text-2xl lg:text-3xl">{data.message}
        </p>
    <footer className="flex items-center gap-3 mt-6 md:mt-12">
        <img className="flex-shrink-0 w-12 h-12 border rounded-full border-black/10 object-contain" src={data.image} alt="Sebastiaan Kloos" loading="lazy" />
        <a href="" target="_blank"
            className="inline-block font-bold tracking-tight">
            <p>{data.name}</p>
            <p className="font-medium text-black/60">{data.knownAs}</p>
        </a>
    </footer> 
</blockquote></div>
  )
}

export default Message