import React from 'react';
import Card from '../Card/Card';
import style from './Videogame.module.css'

export default function Videogames ({videogames}) {
  return (
    <div className={style.show}>
      {videogames.length > 0 ?
          videogames.map((data) => (<Card key={data.id} data={data} />))
        : <img src="https://www.seprelab.com/assets/img/loader.gif" alt="Link caido"/>
      }
    </div>
  );
};