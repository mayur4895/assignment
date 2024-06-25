import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Edit from './components/reusable/Edit.jsx'
import ModalProvider from "@/components/provider/modal-provider.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalProvider />
    <App />  
  </React.StrictMode>,
)
