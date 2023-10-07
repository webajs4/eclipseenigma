import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePg from './pages/HomePg';

function App() {
  return (
    <Router> 
    <Routes> 
      <Route path="/" element={<HomePg />}> 
      </Route> 
    </Routes> 
  </Router> 
  );
}

export default App;
