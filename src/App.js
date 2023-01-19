import './style/main.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SecondPage } from './pages/SecondPage';


function App() {


  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
