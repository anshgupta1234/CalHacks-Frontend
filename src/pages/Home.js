import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


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