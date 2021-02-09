import React, { useState, useEffect } from 'react';

const Movies = ({movies, onKeyUp, onClick, searchInput, page}) => {
  const [totalResults, setTotalResults] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [inputText, setInputText] = useState(searchInput);
  const [defaultPage, setDefaultPage] = useState(1);
  const handleKeyupPages = (e, s) => {
    const p = e.target.value;
    const pagesInRange = Number(p) <= totalPages && Number(p) > 0;
    if (e.key.toLowerCase() === "enter" && pagesInRange && p.length > 0) {
      onKeyUp(s, p);
    }
  }
  const handleChangeInput = (e) => {
    setInputText(e.target.value);
  }
  const handleClickInput = () => {
    onClick(inputText);
  }
  useEffect(() => {
    setTotalPages(Math.ceil(Number(movies.totalResults) / 10));
    setTotalResults(Number(movies.totalResults));
    setDefaultPage(1);
    console.log('useEffect: ', {movies})
  }, [movies, defaultPage]);
  return (
    <nav>
      <h3>
        {totalResults} results for '{searchInput}' ~ page <input id="page-num" type="number" min="1" max={totalPages || 1} step="1" defaultValue={defaultPage} onKeyUp={(e) => handleKeyupPages(e, searchInput) } /> of {totalPages}
      </h3>
      <h3>
        <input id="search-input" type="text" defaultValue={searchInput} onChange={(e) => handleChangeInput(e)} />
        <button className="btn" onClick={handleClickInput}>New search</button>
      </h3>
    </nav>
  );
}

export default Movies;