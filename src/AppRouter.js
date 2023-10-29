import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Camera from './components/Camera';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' exact Component={Home} />
                <Route path='/learn' exact Component={Learn} />
                <Route path='/camera' exact Component={Camera} />
            </Routes>
        </Router>
    );
};

export default AppRouter