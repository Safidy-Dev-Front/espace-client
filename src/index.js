import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
const DOM = document.getElementById('root-app-client')
if(DOM){
    const root = createRoot(DOM);
    root.render(
        <React.StrictMode>
                <App />
        </React.StrictMode>
    )
    console.log("salut les gens from index.js");
}