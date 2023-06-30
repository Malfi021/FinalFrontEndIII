import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from './Context/ThemeContextProvider';
import { ContextProvider } from './Context/global.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <ThemeContextProvider>
            <ContextProvider>
              <App/>
            </ContextProvider> 
        </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


