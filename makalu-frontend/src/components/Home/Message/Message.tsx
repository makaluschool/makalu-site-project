import React from 'react'

const Message = () => {
  return (
    <div><blockquote className="flex flex-col items-center p-4">
    <p className="max-w-4xl text-xl font-medium text-center md:text-2xl lg:text-3xl">"As the Principal of Makalu English Boarding School, I am delighted with our institution's dedication to fostering a nurturing and intellectually stimulating environment for students. Our esteemed faculty, modern facilities, and comprehensive curriculum provide a well-rounded education for academic excellence and personal growth."
        </p>
    <footer className="flex items-center gap-3 mt-6 md:mt-12">
        <img className="flex-shrink-0 w-12 h-12 border rounded-full border-black/10" src="https://loremflickr.com/g/200/200/girl" alt="Sebastiaan Kloos" loading="lazy" />
        <a href="" target="_blank"
            className="inline-block font-bold tracking-tight">
            <p>Thaneswor Dhakal</p>
            <p className="font-medium text-black/60">Founder&Principle of Makalu English Boarding School</p>
        </a>
    </footer>
</blockquote></div>
  )
}

export default Message