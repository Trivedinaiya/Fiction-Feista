import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App1 from './App1.js';
import reportWebVitals from './reportWebVitals';
import Home from './App1.js'

// import Info from './homee.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <App1 />
    </div>
    <div>
    <Home />
    </div>
    <div>
    <Info />
    </div>
  </React.StrictMode>
);

reportWebVitals();
// export default function Home (){
//     return  
// };