import React, { useContext, useState } from 'react'

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
import { MenubarTrigger } from '../ui/menubar';
import AuthContext from '../AuthContext';
const FormContainer = () => {
  const {IsLogedIn,setIsLoggedIn} =  useContext(AuthContext);
 
  
  const [IsSignIn ,setIsSignIn] = useState(false);
  return (
    <Dialog>
            <DialogTrigger asChild>
              <MenubarTrigger onClick={()=>{setIsSignIn(false)}}>
                
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
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px]">
              <span className=" text-green-700 text-sm text-center">
                {" "}
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </span>
              <hr /> 
              <div className=" flex items-start  gap-10 justify-between">
                
             
                <div className="grid gap-4 pb-4 w-full">
                <DialogHeader>
                <DialogTitle className="text-2xl">{ !IsSignIn?'Create Account':'Sign In'}</DialogTitle> 
              </DialogHeader>

              { !IsSignIn &&( 
                  <div className=" flex items-center gap-2">
                    <Input
                      id="firstname"
                      placeholder="FirstName" 
                    />

                    <Input
                      id="lastname"
                      placeholder="LastName" 
                    />
                  </div>)}

                  <Input
                    id="emal"
                    type="email"
                    placeholder="Email"
                    className="w-full"
                  />

                  <Input
                    id="password"
                    type="password"
                    placeholder="Password" 
                  />

                { !IsSignIn &&(  <Input
                    id="Cpassword"
                    type="password"
                    placeholder="Confirm Password" 
                  />)}
                  <Button onClick={()=>{setIsLoggedIn(true)}} type="submit" className="rounded-2xl bg-blue-500 text-white hover:bg-blue-600 hover:text-white">{!IsSignIn?'Create Acount':'Sign In'}</Button>
                  <Button  variant="outline" className="flex items-center gap-3"> <img src="/google.png" height={20} width={20}/> Sign up with Google </Button>
                  <Button  variant="outline" className="flex items-center gap-3"> <img src="/facebook.png" height={20} width={20}/> Sign up with Facebook </Button>
                  {IsSignIn && (<a href='#' className='text-sm text-center cursor-pointer font-semibold'>forget password?</a>)}
                </div>

                <div className=' flex flex-col justify-between'>
                   <span className="text-[13px]"> {IsSignIn? 'Dont have an account yet':'Already have an account?'}<span  onClick={()=>{setIsSignIn(!IsSignIn)}} className="text-blue-500 cursor-pointer">{IsSignIn ?' create new for free!':' Sign In' }</span></span>
                    <img src="/signup.jpg" height={680} width={750}/>
                </div>
              </div>

            {!IsSignIn && (<span className=' right-2 bottom-10  absolute items-end text-xs '>By signing up, you agree to our Terms & conditions, Privacy policy</span>)}
            </DialogContent>
          </Dialog>
  )
}

export default FormContainer
