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
import { useModal } from '@/hooks/use-modal-store';

const signupSchema = z.object({
  firstname: z.string().min(1, {
    message: "Required",
  }),
  lastname: z.string().min(1, {
    message: "Required",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  cpassword: z.string(),
}).refine((data) => data.password === data.cpassword, {
  message: "Passwords must match.",
  path: ["cpassword"],
});

const Signup = () => {
  const { setIsLoggedIn, IsLogedIn, setIsSignIn, IsSignIn } = useContext(AuthContext);
   const {onClose} = useModal();
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      cpassword: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    onClose()
    setIsLoggedIn(true); // Simulate login on form submission
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
          <div className='flex gap-2 items-center'>
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="FirstName" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="LastName" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
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
          <FormField
            control={form.control}
            name="cpassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="Confirm password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between items-center">
            <Button     type="submit" className="rounded-2xl bg-blue-500 lg:w-full text-white hover:bg-blue-600 hover:text-white">
              { 'Create Account' }
            </Button>
            <div className='inline-block lg:hidden'>
              <span className="text-[13px] block lg:hidden">
                <span onClick={() => { setIsSignIn(!IsSignIn) }} className="text-blue-500 cursor-pointer border-b border-blue-500">
                  {' or Sign In'}
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
        </form>
      </Form>
    </div>
  );
}

export default Signup;
