import React from 'react'

interface heroProps{
    title:string,
    list1:string,
    list2:string
}
const HeroSection = ({ title, list1, list2 }: heroProps) => {
  return (
    <section
      className="h-64 md:h-96 bg-cover bg-center relative flex items-center justify-center mt-20"
      style={{ backgroundImage: "url(/room18.jpg)" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2556A5]/70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 p-6 rounded">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
          {title}
        </h1>

        <nav className="flex items-center justify-center space-x-2 text-white mt-4">
          <span className='text-sm'>{list1} ›</span>
          <span className="font-bold text-sm">{list2}</span>
        </nav>
      </div>
    </section>
  );
};


export default HeroSection
