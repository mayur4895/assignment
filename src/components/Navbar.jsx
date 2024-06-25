import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CiSearch } from "react-icons/ci";
import FormContainer from "./reusable/FormContainer";
import { useContext } from "react";
import AuthContext from "./AuthContext";
import { useModal } from "@/hooks/use-modal-store";
export function Navbar() {
  const { isOpen, onClose, type, data,  onOpen} = useModal();
  const {IsLogedIn ,setIsSignIn}  =  useContext(AuthContext)


  const handleopen =()=>{
    setIsSignIn(false);
    onOpen("signinsignup")
  }
  return (
    <Menubar className="w-full border-b  ">
      <div className="  hidden lg:flex justify-between w-full  px-28">
        <MenubarMenu>
          <MenubarTrigger>
            <img src={"/logo.png"} height={180} width={160} />
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <div class="relative">
            <CiSearch className=" absolute top-[0.6rem] left-2" />
            <input
              class="flex h-9 w-[350px] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
              placeholder="Search for your favorite groups in ATG"
            />
          </div>
        </MenubarMenu>
        <MenubarMenu>
        <MenubarTrigger onClick={handleopen} >
                
                {IsLogedIn ? 
                <div className='flex items-center gap-2'> 
                  <img src='/main.jpg' className=' rounded-full h-8 w-8'   /> Mayur Shinde </div>
                   :  
                      <a href="#" className=" font-normal text-[15px]">
                     create Accouunt 
                     <span className=" text-blue-500"> It's free</span>
                   </a>
                  }
                 </MenubarTrigger>
        </MenubarMenu>
      </div>
    </Menubar>
  );
}
