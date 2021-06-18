import React from 'react';
import {Link} from 'react-router-dom';
import style from './landingPage.module.css'
//import ima from './imgbin_resident.png'

function LandingPage() {
    return (
      <div className={style.landingpage}>
        <div className={style.msgContainer}>
          <p className={style.title}>Welcome to Videogames</p>
          <p className={style.text}>¡Discover a new world!</p>
          <Link to='/home'>
            <button className={style.button} type='submit'>Enter</button>
          </Link>
        </div>
        {/* <h2>Individual Project - Celeny Santana</h2> */}
      </div>
    );
}
  
export default LandingPage;