import React from 'react';
import Card from '../Card/Card';


export default function Videogames ({videogames}) {
  return (
    <div key={videogames}>
      {videogames.length > 0 ?
        videogames.map((data) => (<Card data={data} />))
        : <img className="loading" src="https://www.seprelab.com/assets/img/loader.gif" alt="Link caido"/>
      }
    </div>
  );
};