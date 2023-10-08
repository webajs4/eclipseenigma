import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePg from './pages/HomePg';
//import Player from './components/Player';
import Play from './pages/Play';
import Solar from './pages/Solar'
import Abt from './pages/abt'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePg />} />
        <Route path="/play" element={<Play />} />
        <Route path="/solar" element={<Solar />} />
        <Route path="/abt" element={<Abt />} />
      </Routes>
    </Router>
  );
}

export default App;
