import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Home = () => {
    return (
        <div>
            Home Page
            <Link to="/camera">
                <button>OPEN DA CAMARA</button>
            </Link>
        </div>
    );
};

export default Home;