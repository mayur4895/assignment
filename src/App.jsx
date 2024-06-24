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

function App() {
 
 
const [IsLogedIn,setIsLoggedIn] = useState(false);
  return (
    <>  
   <AuthContext.Provider value={{ IsLogedIn, setIsLoggedIn }}>
     <Banner/>
     <Posts/> 
     </AuthContext.Provider>
    </>
  )
}

export default App
