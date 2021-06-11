import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";


function NavBar() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
  }

  return (
    <div>

      <div>
        <Link to="/">
          <h3>Videogames!</h3>
        </Link>
      </div>

      <div>
        <Link to="/home">
          <h3>Home</h3>
        </Link>
      </div>

      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Search videogame..."
            type="text">
          </input>
          <NavLink to={`/results/${name}`}>
            <button name="name" type="submit"> Go! </button>
          </NavLink>
        </form>
      </div>
      
      <div>
        <Link to="/create">
          <h3>Create</h3>
        </Link>
      </div>
      {/* <div>
        <Link to="/about">
          <h3>About</h3>
        </Link>
      </div> */}
    </div>
  );
}


export default NavBar;