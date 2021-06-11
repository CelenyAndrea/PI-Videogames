import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, resetAll } from '../../Actions/index'
import Videogames from '../Videogame/Videogame';
import Pagination from '../Pagination/Pagination';
import Filter from '../Filter/Filter';

function Home() {
  const dispatch = useDispatch();

  const filteredVideogames = useSelector((state) => state.filteredVideogames);
  const filterBy = useSelector((state) => state.filterBy);
  const orderBy = useSelector((state) => state.orderBy);
  const videogames = useSelector((state) => state.videogames);

  useEffect(() => {
    dispatch(resetAll());
    dispatch(getVideogames());
  }, []);

// Filtrado y Ordenado
  let allVideogames;
  filterBy === "All" && orderBy === "Select"
    ? (allVideogames = videogames)
    : (allVideogames = filteredVideogames);

// Paginacion
  function paginate(e, num) {
    e.preventDefault();
    setPage(num);
  }

  const [page, setPage] = useState(1);
  const [videogamesPerPage] = useState(15);

  let lastCardPerPage = page * videogamesPerPage;
  let firtsCardPerPage = lastCardPerPage - videogamesPerPage;
  let currentPageGames = allVideogames.slice(firtsCardPerPage, lastCardPerPage);

  return (
    <div>
      <Filter paginate={paginate} />
      <Videogames videogames={currentPageGames} />
      <Pagination
        videogamesPerPage={videogamesPerPage}
        totalVideogames={allVideogames.length}
        paginate={paginate}
      />
    </div>
  );
};
  
  
export default Home;