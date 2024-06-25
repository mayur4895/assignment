import React, { useContext } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AuthContext from './AuthContext';

const loginSchema = z.object({
   
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string({
    required_error:"Required"
  })
})
  
const SignIn = () => {
  const { setIsLoggedIn, IsLogedIn, setIsSignIn, IsSignIn } = useContext(AuthContext);

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
    
      email: "",
      password: "",
 
    },
  });

  function onSubmit(values) {
    console.log(values);
    setIsLoggedIn(true); // Simulate login on form submission
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           
          <div className="flex justify-between items-center">
            <Button type="submit" className="rounded-2xl bg-blue-500 lg:w-full text-white hover:bg-blue-600 hover:text-white">
              {'Sign In'}
            </Button>
            <div className='inline-block lg:hidden'>
              <span className="text-[13px] block lg:hidden">
                <span onClick={() => { setIsSignIn(!IsSignIn) }} className="text-blue-500 cursor-pointer border-b border-blue-500">
                  {'or create account'}
                </span>
              </span>
            </div>
          </div>
          <Button variant="outline" className="flex items-center gap-3 w-full">
            <img src="/google.png" height={20} width={20} alt="Google" /> Sign up with Google
          </Button>
          <Button variant="outline" className="flex items-center gap-3 w-full">
            <img src="/facebook.png" height={20} width={20} alt="Facebook" /> Sign up with Facebook
          </Button>
          <div className='text-center'>
          <a href='#' className='text-sm text-center cursor-pointer font-semibold'>forget password?</a>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default SignIn;
