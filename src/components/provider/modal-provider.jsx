import React  from "react";
import { useEffect, useState ,useContext} from "react";
import SignupSignInModal from "../modal/signup-signin-modal"
import AuthContext from "../AuthContext";





const ModalProvider = ()=>{

const [isMounted,setisMounted] = useState(false)

 

useEffect(()=>{
setisMounted(true);
},[setisMounted])

if(!isMounted){
    return null
}

    return(<>
    <SignupSignInModal    />
    </>)
}

export default ModalProvider;