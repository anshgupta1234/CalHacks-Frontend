import React, { Component } from 'react';
import { Typography, Button } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward'
// import Carousel from './Carousel'; // You'll need to create a Carousel component
import './Home.css'
import { Link } from 'react-router-dom'; // Import the Link component

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="company-info">
          <Typography variant="h2" color="primary" gutterBottom>
            Loqui
          </Typography>
          <Typography variant="h5" color="primary" gutterBottom>
            Speak like the best.
          </Typography>
        </div>
        <div className="carousel-container">
          {/* <Carousel /> */}
        </div>

        <div className="arrow">
            <Link to="/learn">
                <span></span>
                <span></span>
                <span></span>
            </Link>
        </div>
      </div>
    );
  }
}

export default Home;