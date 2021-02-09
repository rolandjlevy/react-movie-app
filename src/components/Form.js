import React, { useState, useEffect } from 'react';

const Form = ({movies, onKeyUp, onClick}) => {

  const [totalResults, setTotalResults] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [inputText, setInputText] = useState('');
  const [defaultText, setDefaultText] = useState('');
	const [page, setPageNum] = useState(1);

  const handleChangePages = (e) => {
    setPageNum(e.target.value);
  }
  const handleKeyupPages = (e) => {
    const p = e.target.value;
    const pagesInRange = Number(p) <= totalPages && Number(p) > 0;
    if (e.key.toLowerCase() === "enter" && pagesInRange && p.length > 0) {
      onKeyUp(inputText, p);
    }
  }
  const handleClickInput = () => {
    setPageNum(1);
    setDefaultText(inputText);
    onClick(inputText, 1);
  }
  const handleChangeInput = (e) => {
    setInputText(e.target.value);
  }
  useEffect(() => {
    setTotalPages(Math.ceil(Number(movies.totalResults) / 10));
    setTotalResults(Number(movies.totalResults));
    setInputText(inputText);
  }, [movies, inputText]);
  return (
    <nav>
    
      <h3>
        <input 
          id="search-input" 
          type="text" 
          defaultValue={inputText} 
          onChange={(e) => handleChangeInput(e)} 
        />
        <button className="btn" onClick={handleClickInput}>New search</button>
      </h3>

      {movies.Search && movies.Search.length > 0 ? 
      (<h3>
        {totalResults} results for '{defaultText}' ~ page &nbsp;
        <input 
          id="page-num" 
          type="number" 
          step="1"
          min="1" 
          max={totalPages || 1}
          value={page}
          onKeyUp={(e) => handleKeyupPages(e)} 
          onChange={(e) => handleChangePages(e) } /> of {totalPages}
      </h3>) : null}

    </nav>
  );
}

export default Form;