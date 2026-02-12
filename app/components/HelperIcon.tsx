import React from 'react'
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
const HelperIcon = () => {
  return (
    <div className='fixed right-6 bottom-6 flex flex-col gap-4 z-10'>
        <a className='w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white text-2xl'>
         <FaWhatsapp/>
        </a>
        <a className='w-14 h-14 rounded-full bg-[#2556A5] flex items-center justify-center text-white text-2xl'>
        <FaPhone/>
        </a>
      </div>
  )
}

export default HelperIcon
