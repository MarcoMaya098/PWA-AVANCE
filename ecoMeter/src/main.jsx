import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);



// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <StepContext>
//       <React.StrictMode>
//          <App />
//       </React.StrictMode>
//     </StepContext>
//   </BrowserRouter>

// );