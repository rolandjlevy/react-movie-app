### Ideas

- add pagination. see documentation

### Inspiration
- https://marc.dev/
- Tutorial: https://www.freecodecamp.org/news/react-movie-app-tutorial/

#### Code

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
```

```js
{moviesAPI().then(movies => (<Movies movies={movies} />))}
```

```js
const moviesLocal = {
    "Search": [
    {
      "Title":"The Lego Batman Movie",
      "Year":"2017",
      "imdbID":"tt4116284",
      "Type":"movie",
      "Poster":"https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
    },
    {
      "Title":"Batman: The Animated Series",
      "Year":"1992–1995",
      "imdbID":"tt0103359",
      "Type":"series",
      "Poster":"https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
    },
    {
      "Title":"Batman: Under the Red Hood",
      "Year":"2010",
      "imdbID":"tt1569923",
      "Type":"movie",
      "Poster":"https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      "Title":"Batman: The Dark Knight Returns, Part 1",
      "Year":"2012",
      "imdbID":"tt2313197",
      "Type":"movie",
      "Poster":"https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"
    }
  ],
  "totalResults":"405",
  "Response":"True"
}
```