import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage'
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import GameDetail from './Components/GameDetail/GameDetail'
import Search from './Components/Search/Search'
import CreateVideogame from './Components/CreateVideogame/CreateVideogame';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/'>
          <Route path='/home' component={NavBar} />
          <Route exact path='/home' component={Home} />
          <Route path='/results' component={NavBar} />
          <Route path='/videogames' component={NavBar} />
          <Route path='/create' component={NavBar} />
          <Route
          exact path='/videogames/:id'
          render={({ match }) => < GameDetail id={match.params.id} />}
          />
          <Route exact path='/results/:name' component={Search} />
          <Route path="/create" exact component={CreateVideogame} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
