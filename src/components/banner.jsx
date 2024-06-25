import React, { useContext, useState } from 'react';
import { Navbar } from './Navbar';
import { FiUserPlus } from 'react-icons/fi';
import { Button } from './ui/button';
import { FaArrowLeft } from "react-icons/fa6";
import { MdLogout } from 'react-icons/md';
import AuthContext from './AuthContext';

const Banner = () => {
  const { IsLogedIn, setIsLogedIn } = useContext(AuthContext);
  const [join, setJoin] = useState(false);

  return (
    <div className="relative w-full">
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <img
        src="/mainbg.jpg"
        className="object-cover h-[236px] lg:h-[68vh] w-full"
        alt="Background"
      />
      <div className="absolute top-2 lg:hidden w-full flex items-center justify-between px-5">
        <FaArrowLeft className="text-white" />
        <Button
          onClick={() => { setJoin(!join); }}
          className="flex items-center gap-2 hover:border-transparent hover:bg-black/20 bg-transparent text-white border"
        >
          {!join ? <MdLogout /> : <FiUserPlus />}
          {join ? 'Join Group' : 'Leave Group'}
        </Button>
      </div>

      <div className="absolute top-[120px] left-[16px] lg:top-[378px] lg:left-[110px] text-white">
        <h1 className="text-[20px] lg:text-[35px]">Computer Engineering</h1>
        <span className="text-sm lg:text-[17px]">142,765 Computer Engineers follow this</span>
      </div>
    </div>
  );
};

export default Banner;
