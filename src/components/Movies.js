import React from 'react';
import Movie from './Movie';

const Movies = ({movies, totalResults, totalPages, onKeyUp, searchInput, page}) => {
  const handleKeyupPages = (e, searchInput) => {
    const page = e.target.value;
    const pagesInRange = Number(page) <= totalPages && Number(page) > 0;
    if (e.key.toLowerCase() === "enter" && pagesInRange && page.length > 0) {
      onKeyUp(searchInput, page);
    }
  }
  return (
    <section className="movies">
      <h3>{totalResults} results for '{searchInput}' ~ page <input type="number" min="1" max={totalPages} step="1" defaultValue={page} onKeyUp={(e) => handleKeyupPages(e, searchInput) } /> of {totalPages}</h3>
      <h3><input type="text" /> <button className="btn">New search</button></h3>
      <ul className="container">
        {movies.map(movie => (<Movie key={movie.imdbID} movie={movie} />))}
      </ul>
    </section>
  );
}

export default Movies;