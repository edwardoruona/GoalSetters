import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


// ReactDOM.render(
//   <BrowserRouter>
//        <App />
//   </BrowserRouter>,
  
//   document.getElementById('root')

// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
       <App />
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

reportWebVitals();
