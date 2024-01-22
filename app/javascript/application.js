// app/javascript/application.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Adjust the path based on your project structure

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
});
