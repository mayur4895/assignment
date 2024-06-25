 
import React, { useContext } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useModal } from '@/hooks/use-modal-store';
import Signup from '../signup';
import AuthContext from '../AuthContext';
import SignIn from '../signin';

const SignupSignInModal = () => {
  const { IsSignIn, setIsSignIn } = useContext(AuthContext);
  const { isOpen, onClose, type } = useModal(); 
  const isModalOpen = isOpen && type === "signinsignup";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <span className="text-green-700 text-sm text-center">
          {" "}
          Let's learn, share & inspire each other with our passion for
          computer engineering. Sign up now 🤘🏼
        </span>
        <hr />
        <div className="flex items-start gap-10 justify-between">
          <div className="grid gap-4 pb-4 w-full">
            <DialogHeader>
              <DialogTitle className="text-2xl">{!IsSignIn ? 'Create Account' : 'Sign In'}</DialogTitle>
            </DialogHeader>
            {IsSignIn ? <SignIn/>: <Signup />}
          </div>
          <div className='lg:flex flex-col justify-between hidden'>
            <span className="text-[13px] hidden lg:block">
              {IsSignIn ? "Don't have an account yet" : "Already have an account?"}
              <span onClick={() => setIsSignIn(!IsSignIn)} className="text-blue-500 cursor-pointer">
                {IsSignIn ? ' create new for free!' : ' Sign In'}
              </span>
            </span>
            <img src="/signup.jpg" height={680} width={750} alt="Signup" />
          </div>
        </div>
        {!IsSignIn && (
          <span className='right-2 text-center bottom-6 lg:bottom-10 lg:absolute items-end text-xs'>
            By signing up, you agree to our Terms & conditions, Privacy policy
          </span>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SignupSignInModal;
