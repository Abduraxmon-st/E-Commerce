import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import { ContextProvider } from './context/MainContext.jsx';
import AuthProvider from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ContextProvider>
        <App />
        <ToastContainer position='top-center' />
      </ContextProvider>
    </AuthProvider>
  </StrictMode>,
)
