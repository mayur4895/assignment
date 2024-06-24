import React from 'react'
import { MdOutlineEdit } from "react-icons/md";

const Edit = () => {
  return (
    <div className=' lg:hidden block fixed bottom-4 right-2'>
       <div className='flex items-center justify-center text-white w-12 h-12 bg-gradient-to-r from-[#FF5C5C] to-[#F0568A] rounded-full'>
           <MdOutlineEdit size={30}/>
        </div>
    </div>
  )
}

export default Edit
