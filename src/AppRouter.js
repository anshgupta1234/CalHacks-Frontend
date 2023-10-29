import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Learn from './pages/Learn';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' exact Component={Home} />
                <Route path='/learn' exact Component={Learn} />
            </Routes>
        </Router>
    );
};

export default AppRouter