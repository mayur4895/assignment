import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { Navbar } from './components/Navbar'
import Banner from './components/banner'
import { Posts } from './components/Posts'
import AuthContext from './components/AuthContext'
import Edit from './components/reusable/Edit'
import ModalProvider from './components/provider/modal-provider'
  

function App() {
 
 
const [IsLogedIn,setIsLoggedIn] = useState(false);
const [IsSignIn,setIsSignIn] = useState(true);
  return (
    <>  
   <AuthContext.Provider value={{ IsLogedIn, setIsLoggedIn ,IsSignIn, setIsSignIn}}>
    <div className='w-full '>
    <Banner/>
     <Posts/> 
     <Edit/>
     <ModalProvider/>
    </div>
     </AuthContext.Provider>
    </>
  )
}

export default App
