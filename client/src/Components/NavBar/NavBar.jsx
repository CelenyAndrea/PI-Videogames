import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from './logo.png';
import style from './NavBar.module.css'

function NavBar() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
  }

  return (
    <div className={style.mainContainer}>
      <nav className={style.navContainer}>
        <div className={style.linkContainer}>
          <img src={logo} alt='logo' className={style.logo} />
          <Link to="/" className={style.hover}>Videogames!</Link>
          <Link to="/home" className={style.hover}>Home</Link>
          <Link to="/create" className={style.hover}>Create VideoGame</Link>
          {/* <Link to="/about" className={style.hover">About</Link> */}
        </div>
            
        <div>
          <form onSubmit={(e) => handleSubmit(e)} className={style.formContainer}>
            <div className={style.searchBarContainer}>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Search videogame..."
                type="text"
                className={style.input}>
              </input>
              <NavLink to={`/results/${name}`} className={style.search}>
                <button className={style.button} type="submit"> Go! </button>
              </NavLink>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}


export default NavBar;