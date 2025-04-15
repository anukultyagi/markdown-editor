import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MdContextProvider } from './contexts/MdContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MdContextProvider>
      <App />
    </MdContextProvider>
  </React.StrictMode>,
)
