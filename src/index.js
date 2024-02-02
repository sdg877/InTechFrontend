import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App/App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(  
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  root
);

