import react, { useContext, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FiUserPlus } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";
import { FaCross, FaRegThumbsUp, FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Postcard from "./reusable/postcard";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { HiLocationMarker, HiOutlineLocationMarker } from "react-icons/hi";
import { IoAlertCircleOutline } from "react-icons/io5";
import GroupItem from "./reusable/GroupItem";
import { MdLogout } from "react-icons/md";
import AuthContext from "./AuthContext";
import { InitialPosts } from "@/postsdata";
 
export function Posts() {

    const { IsLogedIn, setIsLoggedIn } = useContext(AuthContext);
    const [selectedTab, setSelectedTab] = useState("All");
    const [posts, setPosts] = useState(InitialPosts);
  
    const filteredPosts = selectedTab === "All" ? posts : posts.filter(post => post.type === selectedTab);
const [join,setjoin] = useState(false)
 const [location ,setlocation] = useState('Noida,INdia');
 console.log(filteredPosts)
  return (
    <div className="h-full w-full mt-5">
    <div className="w-full grid lg:grid-cols-3  lg:px-5 xl:px-[150px] gap-14 items-start  justify-between">
      <div className="w-full  lg:col-span-2">
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="w-full items-start hidden lg:flex">
              <TabsTrigger value="All">All Posts({posts.length})</TabsTrigger>
              <TabsTrigger value="Article">Article</TabsTrigger>
              <TabsTrigger value="MeetUp">MeetUp</TabsTrigger>
              <TabsTrigger value="Education">Education</TabsTrigger>
              <TabsTrigger value="Job">Job</TabsTrigger>
            </TabsList>

            <div className="flex justify-between items-center w-full lg:hidden px-3">
              <h2 className="font-semibold">Posts({posts.length})</h2>
              <Select onValueChange={setSelectedTab}>
                <SelectTrigger className="w-[190px]">
                  <span>Select</span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Posts({posts.length})</SelectItem>
                  <SelectItem value="Article">Article</SelectItem>
                  <SelectItem value="MeetUp">MeetUp</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Job">Job</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <TabsContent value="All" className="p-0 items-center lg:items-start grid-cols-2">
              {selectedTab === "All" && filteredPosts.map(post => (
                <Postcard key={post.id} {...post} />
              ))}
            </TabsContent>

            <TabsContent value="Article" className="p-0 items-center lg:items-start grid-cols-2">
              {selectedTab === "Article" && filteredPosts.map(post => (
                <Postcard key={post.id} {...post} />
              ))}
            </TabsContent>

            <TabsContent value="Education" className="p-0 items-center lg:items-start grid-cols-2">
              {selectedTab === "Education" && filteredPosts.map(post => (
                <Postcard key={post.id} {...post} />
              ))}
            </TabsContent>

            <TabsContent value="Job" className="p-0 items-center lg:items-start grid-cols-2">
              {selectedTab === "Job" && filteredPosts.map(post => (
                <Postcard key={post.id} {...post} />
              ))}
            </TabsContent>

            <TabsContent value="MeetUp" className="p-0 items-center lg:items-start grid-cols-2">
              {selectedTab === "MeetUp" && filteredPosts.map(post => (
                <Postcard key={post.id} {...post} />
              ))}
            </TabsContent>
          </Tabs>
      
    
  
        </div>
        <div className=" hidden  lg:flex flex-col justify-center items-center">
          <div className="lg:flex items-center gap-2   hidden ">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="select operation" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="write">Write a post</SelectItem>
                  <SelectItem value="read">Read a post</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button onClick={()=>{setjoin(!join)}} className={`flex items-center gap-2 text-white bg-blue-500 hover:bg-blue-500 ${join ? ' text-black bg-transparent border hover:bg-transparent': ''}`}>
              { join ?<MdLogout/> :<FiUserPlus/>} {join?'Leave Group':' Join Group'}
            </Button>
          </div>

          <div className="hidden  mt-5 items-center justify-center lg:flex flex-col">
            <div class="relative w-[243px]">
              <HiLocationMarker className=" absolute top-[0.6rem] left-2" />
              <input
                class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
                placeholder="Enter Location"
                value={location}
                disabled={!IsLogedIn}
                defaultValue={"Noida,INdia"}
                onChange={(e)=>{setlocation(e.target.value)}}
              />
             {!IsLogedIn ? <FiEdit2 className=" top-[0.6rem] right-2 absolute" /> : location.length ==0 ? <FaSearch className=" top-[0.6rem] right-2 absolute"/> : <IoMdClose onClick={()=>{setlocation('')}} className=" top-[0.6rem] right-2 absolute"/> }
            </div>

            <div className=" mt-5">
              <p className=" text-[12px] opacity-50  flex items-start  gap-1">
                {" "}
                <IoAlertCircleOutline size={20} /> Your location will help us
                serve better and extend a personalised experience.
              </p>
            </div>

            {IsLogedIn && (
              <div className="mt-4 flex flex-col items-center">
                <h2 className="text-[14px] flex items-center gap-2 text-center">
                  <FaRegThumbsUp /> RECOMMENDED GROUPS
                </h2>
                <div>
                  <GroupItem
                    groupimg={
                      "https://s3-alpha-sig.figma.com/img/bb0d/5f13/7ffa8afe7647578af2381ac9090c32e2?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bASMZv4uJswP-anJk3tc6Zjmn1fF2tVePM8Hjabw55bGskrDnbLt8DKfnJkPVz4hPT4ZI9H5-~3NGv7hQ05eop8NF9txK7CPHCEVy9OQPh~i2yuOSdf8G1OBYcRTzQvBWcaRU65RIxZ8dGhVKzE7eMLuZvt--yU5HCs9xlZjz5lvslzx5-IDKBx2nEJjtEKW3MLX4JwmIxcAmL9u4zms9AiptWplTQHgCle1j75wVNd5PjpGhg~-cUDB7AMU6C2O~w2DXZgWEXROxphoVh00vj0WNGmtXmGdOZ6JsLlTWw~AZTnaSWBu1lSCTIsVSYPXpXR8bqgaeBgSl2QWTOo4-Q__"
                    }
                    name={"Leisure"}
                    isLogedIn={IsLogedIn}
                  />

                  <GroupItem
                    groupimg={
                      "https://s3-alpha-sig.figma.com/img/bcef/452c/f2f96211f57819f3ef6b3922e0cd72cf?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PPq~Uvj2O~Hce0SEs2q6kR~TXVobEcLVw3Txp25QuuuJ3rr857EjKvnLdedPfkLv4ky0w28TVB5Z7184H1ZvYfF8vCf5gOVr0UHc35WZ0Y4BuZlkw0Vhps3W-fXc3V7tTNg~T0yyRJH6VTNPBV~diyEw9yalHqcucJDrfvgEZ00XVR3Rihyz1QqnXoJqPQ03MvFxULpnQTeOjFHog1TTbZx2JcRrKdvo2zg0v7vQOcsxfAG6DSNTjBwyi6WUldoGVBDOe70be0HCxr~ppTFhATBcPR9LAqOMgyYk-vpXqS3Z1sfWeR5SzT2n7iM6n0ZyjRfwLjzrholjRsDyBJFQvg__"
                    }
                    name={"Leisure"}
                    isLogedIn={IsLogedIn}
                  />

                  <GroupItem
                    groupimg={
                   "https://s3-alpha-sig.figma.com/img/8f0b/0ff9/829dac10d09fc377df6ec78c4098bc9a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JlrHAdnWZ80JW49nSg80mHCpJLp36G38CHsXRHtfugZciLNau6ivMU7Sgk18wGcgSMCYziKP4wdRecDgnyiMfGwwKY-3IJZvcmVkdg6CQ9iL9r9737fIh5HcCFVKe5DEWgbc4T0Z484GHtAPWPXyuoR933QSHje3OA7JtdvWrl5zujTE6PMLklcka5ZOhOsfAYTwp5h8D-n-Qujgh0aGCqc10YOvkVYbCdvRCUUnjifKGRaKJo-rKHCqhbS~pY7cuT11iIqj4IW2h8AgpD6AxlT78Mm6gF9w~9HBY7zczS3dtxEYLI98jaYS4QOYonqbeZky-hrZWtU59~J0nvOeIg__"
                    }
                    name={"Leisure"}
                    isLogedIn={IsLogedIn}
                  />

                  <GroupItem
                    groupimg={
                    "https://s3-alpha-sig.figma.com/img/0533/15a9/cf46af0ebdaae2ffbbb5718726788a19?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pj3H1ZvIF416E7fKc00CiVaFGThQhtzNHHUln89k8DKT~1fPKRE4yd1zTnk5q8Plm6hG2eLJapsX7cNi2woB3kiZg81NscFlWmQR3V-c3-EXLm~KJoAKpsEjbiZ2xSTYVuPxmqs3XXTr4BG7OSpoTdM9xq0f5plE90gcimdbMHIoFyKEyJl93szyAabp7VNiZnX2UyyoXsQOu61ZO14m4BNerL9VYflvJsWOalySOBWLIx1UEDk6ijRBoJ62J8m38DuE1~9eBcFGqkyPUpofOnpV9Z9Y4X95gRMwJ3u3Otdgi5U0cW5baXSm2Ow7kNkTKVHkr~ClCeQysBFDKKG~Ww__"
                    }
                    name={"Leisure"}
                    isLogedIn={IsLogedIn}
                  />
                </div>

                <p className="mt-5 text-blue-500 text-end text-xs">See more...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
