import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';


export const GlobalRouter = () => {

    return (
        <Router>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            {/* <Footer /> */}
        </Router>
    );
};