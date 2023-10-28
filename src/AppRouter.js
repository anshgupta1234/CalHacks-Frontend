import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Camera from './Camera';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' exact Component={Home} />
                <Route path='/camera' exact Component={Camera} />
            </Routes>
        </Router>
    );
};

export default AppRouter