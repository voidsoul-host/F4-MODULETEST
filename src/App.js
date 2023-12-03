import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import History from './Components/History';
import WordDetails from './Components/WordDetails';

const App = () => {
  const [historyWord, setHistoryWord] = useState("");
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History setHistoryWord={setHistoryWord} />} />
        <Route path = {`/word/${historyWord}`} element={<WordDetails historyWord={historyWord} />} />
      </Routes>
    </div>
  );
};

export default App;