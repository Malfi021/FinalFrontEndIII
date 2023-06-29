import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from './Context/ThemeContextProvider';
import DataContextProvider from './Context/data.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <ThemeContextProvider>
          <DataContextProvider>
            <App/>
          </DataContextProvider>
        </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


