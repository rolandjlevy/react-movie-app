import React, { useState, useEffect } from 'react';

const Movies = ({movies, totalResults, totalPages, onKeyUp, onClick, searchInput, page, defaultPage}) => {
  const [inputText, setInputText] = useState(searchInput);
  const [dPage, setDefaultPage] = useState(1);
  const handleKeyupPages = (e, s) => {
    const page = e.target.value;
    const pagesInRange = Number(page) <= totalPages && Number(page) > 0;
    if (e.key.toLowerCase() === "enter" && pagesInRange && page.length > 0) {
      onKeyUp(s, page);
    }
  }
  const handleChangeInput = (e) => {
    setInputText(e.target.value);
  }
  const handleClickInput = () => {
    onClick(inputText, 1);
  }
  useEffect(() => {
    setInputText(searchInput);
    setDefaultPage(1);
    console.log('Movies > useEffect > dPage is', {searchInput, dPage})
  }, [searchInput, dPage]);
  return (
    <nav>
      <h3>
        {totalResults} results for '{searchInput}' ~ page <input id="page-num" type="number" min="1" max={totalPages} step="1" defaultValue={dPage} onKeyUp={(e) => handleKeyupPages(e, searchInput) } /> of {totalPages}
      </h3>
      <h3>
        <input id="search-input" type="text" defaultValue={searchInput} onChange={(e) => handleChangeInput(e)} />
        <button className="btn" onClick={handleClickInput}>New search</button>
      </h3>
      {/* <ul className="container">
         {movies.map(movie => (<Movie key={movie.imdbID} movie={movie} />))}
       </ul>*/}
    </nav>
  );
}

export default Movies;