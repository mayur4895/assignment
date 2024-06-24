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
    Job: <PiSuitcaseLight size={18} />,
    Education: <LiaMicroscopeSolid size={18} />,
    MeetUp: <PiHandshakeDuotone size={18} />,
    Article: <BsPen size={18} />,
  };

  return (
    <Card className="w-full  xl:w-[650px]">
      {image && (
        <div className="   w-full   h-[180px] xl:w-[650px] xl:h-[220px]">
          <img src={image} className="  h-full w-full object-center" />
        </div>
      )}
      <CardHeader className="px-5">
        <CardTitle className=" flex items-center">
          {" "}
          {mapIcon[type]} {type}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className=" flex items-start justify-between">
          <h2 className="text-[22px] w-full">{title}</h2>

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
        <p className=" text-[15px] text-[#5C5C5C]">{description}</p>
        <div className=" flex  items-center gap-8">
          {date && (
            <span className="flex items-center gap-1 text-[15px]">
              {" "}
              <FaRegCalendarAlt /> {date}
            </span>
          )}

          {jobcompany &&(
            <span className="flex items-center gap-1 text-[15px]    truncate">
            {" "}
            <PiBagSimple /> {jobcompany}
          </span>
          )}

          {location && (
            <span className="flex items-center gap-1 text-[15px]">
              {" "}
              <IoLocationOutline /> {location}
            </span>
          )}
        </div>

        { IsButton && (
            <Button
              className={`w-full h-[38px] mt-2 rounded-[8px] text-[13px]  ${Color}`}
              variant="outline"
            >
              {buttonText}
            </Button>
  
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className=" flex items-center gap-2">
          <div>
            <img src={authorImg} className=" w-12 h-12 rounded-full" />
          </div>
          <span className="  text-lg"> {author}</span>
        </div>

        <div className=" flex items-center gap-5">
          <span className=" flex items-center gap-2">
            {" "}
            <IoEyeOutline /> {views} views{" "}
          </span>
          <GoShareAndroid />
        </div>
      </CardFooter>
    </Card>
  );
};

export default Postcard;
