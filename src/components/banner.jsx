 import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { FiUserPlus } from 'react-icons/fi'
import { Button } from './ui/button'
import { FaArrowLeft } from "react-icons/fa6";
import { MdLogout } from 'react-icons/md';
import AuthContext from './AuthContext';
 const Banner = () => {
  const {IsLogedIn,setIsLogedIn} =  useContext(AuthContext);
  const [join,setjoin] = useState(false)
   return (
     <div className='    '>
    <div className='  hidden lg:block'>
    <Navbar/>
    </div>
   <img src='/mainbg.jpg'  className='  relative h-[236px] lg:h-[68vh]  w-full'  />
   <div className=' absolute top-2  lg:hidden  w-full flex items-center justify-between px-5'>
    <FaArrowLeft className='text-white'/>
    <Button onClick={()=>{setjoin(!join)}} className="flex items-center gap-2   hover:border-transparent hover:bg-black/20  bg-transparent text-white border  ">
   {!join ?<MdLogout/> :<FiUserPlus />  }{join?'Join Group':'Leave Group'}
 </Button>
   </div>
  
   <div className='  absolute  top-[120px] left-[16px] lg:top-[378px] lg:left-[110px] text-white'>
    <h1 className='text-[35px]'>Computer Engineering</h1>
    <span className='text-[17px]'>142,765 Computer Engineers follow this</span>
   </div>
   </div>
 
   )
 }
 
 export default Banner
 