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
export function Navbar() {
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
              <FormContainer/>
        </MenubarMenu>
      </div>
    </Menubar>
  );
}
