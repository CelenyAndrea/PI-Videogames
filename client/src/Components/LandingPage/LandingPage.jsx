import React from 'react';
import {Link} from 'react-router-dom';
import './landingPage.css'

function LandingPage() {
    return (
      <div className='background'>
        <div className='flex'>
        <h1>Welcome to Videogames</h1>
          <button className='enter'>
            <Link to='/home'>
              <span id='text'>"Discover a new world"</span>
            </Link>
          </button>
        </div>
        <h2>Individual Project - Celeny Santana</h2>
      </div>
    );
}
  
export default LandingPage;