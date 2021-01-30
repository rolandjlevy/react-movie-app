import React from 'react';

const Movies = ({movies}) => {
  return (
    <div>
      <ul>
        {movies["Search"].map(movie => (<li key={movie.imdbID}>{movie.Title}</li>))}
      </ul>
    </div>
  );
}

export default Movies;

// const Movies = ({movies}) => {
//   return (
//     <div>
//       <ul>
//         {movies.then(data => {
//           return data["Search"].map(movie => (<li key={movie.imdbID}>{movie.Title}</li>))
//         })}
//       </ul>
//     </div>
//   );
// }