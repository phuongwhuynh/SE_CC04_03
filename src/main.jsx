import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalState from './context/index.jsx'


<<<<<<< HEAD
=======
import "primereact/resources/primereact.min.css"; // Core styles
import "primereact/resources/themes/lara-light-blue/theme.css"; // Theme styles
import "primeicons/primeicons.css"; // Icons



>>>>>>> Anh
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalState>
      <App></App>
    </GlobalState>
  </React.StrictMode>
)
