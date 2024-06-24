import React, { useState } from 'react'
import { Button } from '../ui/button'

const GroupItem = ({
    groupimg,
    name,
    isLogedIn,
    
}) => {
 
    

    const [isFollow, setIsFollow] = useState(false)
  return (
    <div className='flex items-center justify-between w-[240px] py-3'>
       <div className='flex items-center gap-2'>
        <img  src={groupimg} className=' rounded-full h-[36px] w-[36px]' />
        <span>{name}</span>
       </div>
       <Button onClick={()=>{setIsFollow(!isFollow)}}  disabled={!isLogedIn}  className={  `rounded-2xl  ${isFollow ?'bg-black text-white':'bg-gray-300 text-black hover:bg-gray-300'}`}>{ isFollow?'Unfollow':'follow'}</Button>
    </div>
  )
}

export default GroupItem
