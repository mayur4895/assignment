import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GoShareAndroid } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { PiSuitcaseLight } from "react-icons/pi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsPen } from "react-icons/bs";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LiaMicroscopeSolid } from "react-icons/lia";
import { PiHandshakeDuotone } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { PiBagSimple } from "react-icons/pi";
import { CaretLeftIcon } from "@radix-ui/react-icons";
const Postcard = ({
  title,
  description,
  image,
  author,
  views,
  authorImg, 
  type,
  date,
  jobcompany,
  location,
  buttonText,
  Color,
  IsButton,
}) => {
  const mapIcon = {
    Job: <img src="/travel.png" height={35} width={35}/> ,
    Education: <img src="/microscope.png" height={35} width={35}/>  ,
    MeetUp: <img src="/meet.png" height={35} width={35}/> ,
    Article: <img src="/article.png" height={35} width={35}/> ,
  };

  return (
    <Card className="w-full xl:max-w-[650px]">
    {image && (
      <div className="w-full h-[180px] xl:h-[220px]">
        <img src={image} className="w-full h-full object-cover" alt="Post Image" />
      </div>
    )}
    <CardHeader className="px-5">
      <CardTitle className="flex items-center gap-2">
        {mapIcon[type]} {type}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex items-start justify-between">
        <h2 className="text-base lg:text-lg xl:text-xl ">{title}</h2>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div>
                <IoEllipsisHorizontalSharp size={22} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Report</DropdownMenuItem>
              <DropdownMenuItem>Option3</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <p className="text-sm lg:text-base text-gray-600">{description}</p>
      <div className="flex items-center gap-4 mt-2">
        {date && (
          <span className="flex items-center gap-1 text-sm">
            <FaRegCalendarAlt /> {date}
          </span>
        )}
        {jobcompany && (
          <span className="flex items-center gap-1 text-sm">
            <PiBagSimple /> {jobcompany}
          </span>
        )}
        {location && (
          <span className="flex items-center gap-1 text-sm">
            <IoLocationOutline /> {location}
          </span>
        )}
      </div>
      {IsButton && (
        <Button
          className={`w-full mt-4 rounded-lg text-sm ${Color}`}
          variant="outline"
        >
          {buttonText}
        </Button>
      )}
    </CardContent>
    <CardFooter className="flex justify-between mt-4 px-2">
      <div className="flex items-center gap-2">
        <img src={authorImg} className="lg:w-12 lg:h-12 h-8 w-8 rounded-full" alt="Author" />
        <span className="text-xs text-nowrap lg:text-lg">{author}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="flex  text-nowrap items-center gap-1 text-xs lg:text-sm">
          <IoEyeOutline /> {views} views
        </span>
        <GoShareAndroid size={20} />
      </div>
    </CardFooter>
  </Card>
  );
};

export default Postcard;
