import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogameById } from '../../Actions/index';
import style from './GameDetail.module.css';

function GameDetail({ id }) {
    const dispatch = useDispatch();
    const videogame = useSelector((store) => store.searchVideogameById);

    useEffect(() => {
        dispatch(getVideogameById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    return (    
        <div className={style.full}>
            <div className={style.container}>
                <div className={style.cardContainer}>
                    <div className={style.header}>
                        <h2 className={style.info}>{videogame.name}</h2>
                        {videogame.image === null || !videogame.image ?
                            <i className="fa fa-spinner fa-spin fa-3x fa-fw "aria-hidden="true"></i>
                            : <img src={videogame.image} className={style.imagen} alt={videogame.name} /> 
                        }
                        <p className={style.info}>({videogame.released})</p>
                        <div className={style.paw}>
                        <i className="fa fa-eercast" aria-hidden="true"></i>
                        </div>
                        <p className={style.info}>Genres: {videogame.genres}</p>
                        <div className={style.paw}>
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>
                        </div>
                        <p className={style.info}>Rating: {videogame.rating} points.</p>
                        <div className={style.paw}>
                        <i className="fa fa-play" aria-hidden="true"></i>
                        </div>
                        <p className={style.info}>Platforms: {videogame.platforms}.</p>
                    </div>
                    <div className={style.description}>
                        <p className={style.full}>
                            <strong>About this game:</strong>
                        </p>
                        <p>{videogame.description}</p>
                    </div>
                </div>
            </div>
            <Link to="/home">
                <button className={style.button} type="submit">Home</button>
            </Link>
        </div>    
    );
}

export default GameDetail;