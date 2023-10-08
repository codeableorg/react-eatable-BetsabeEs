import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Global } from '@emotion/react'
import { global, reset } from "./styles";
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Global styles={reset} />
      <Global styles={global} />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
