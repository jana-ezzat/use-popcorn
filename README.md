Below is a COMPLETE, ready-to-run split of your project.
Every component has its own file with correct imports, props, and exports.

============================
FOLDER STRUCTURE
================

src/
├── components/
│   ├── navbar/
│   │   ├── Navbar.jsx
│   │   ├── Logo.jsx
│   │   ├── Search.jsx
│   │   └── NumResults.jsx
│   │
│   ├── layout/
│   │   ├── Main.jsx
│   │   └── Box.jsx
│   │
│   ├── movies/
│   │   ├── MovieList.jsx
│   │   ├── Movie.jsx
│   │   ├── MovieDetails.jsx
│   │   └── WatchedMovieList.jsx
│   │
│   ├── watched/
│   │   └── WatchedSummary.jsx
│   │
│   ├── ui/
│   │   ├── Loader.jsx
│   │   └── ErrorMessage.jsx
│   │
│   └── StarRating.jsx
│
├── utils/
│   └── average.js
│
├── App.js

=================================================
COMPONENT FILES
===============

---------------- Navbar ----------------

components/navbar/Navbar.jsx

import Logo from "./Logo";

function Navbar({ children }) {
return ( <nav className="nav-bar"> <Logo />
{children} </nav>
);
}

export default Navbar;

components/navbar/Logo.jsx

function Logo() {
return ( <div className="logo"> <span role="img">🍿</span> <h1>usePopcorn</h1> </div>
);
}

export default Logo;

components/navbar/Search.jsx

function Search({ query, setQuery }) {
return (
<input
className="search"
type="text"
placeholder="Search movies..."
value={query}
onChange={(e) => setQuery(e.target.value)}
/>
);
}

export default Search;

components/navbar/NumResults.jsx

function NumResults({ movies }) {
return ( <p className="num-results">
Found <strong>{movies.length}</strong> results </p>
);
}

export default NumResults;

---------------- Layout ----------------

components/layout/Main.jsx

function Main({ children }) {
return <main className="main">{children}</main>;
}

export default Main;

components/layout/Box.jsx

import { useState } from "react";

function Box({ children }) {
const [isOpen, setIsOpen] = useState(true);

return ( <div className="box">
<button className="btn-toggle" onClick={() => setIsOpen((o) => !o)}>
{isOpen ? "–" : "+"} </button>
{isOpen && children} </div>
);
}

export default Box;

---------------- UI ----------------

components/ui/Loader.jsx

function Loader() {
return <p className="loader">Loading...</p>;
}

export default Loader;

components/ui/ErrorMessage.jsx

function ErrorMessage({ message }) {
return ( <p className="error"> <span>⚠ </span>
{message} </p>
);
}

export default ErrorMessage;

---------------- Movies ----------------

components/movies/MovieList.jsx

import Movie from "./Movie";

function MovieList({ movies, onSelectMovie }) {
return ( <ul className="list list-movies">
{movies.map((movie) => ( <Movie
       key={movie.imdbID}
       movie={movie}
       onSelectMovie={onSelectMovie}
     />
))} </ul>
);
}

export default MovieList;

components/movies/Movie.jsx

function Movie({ movie, onSelectMovie }) {
return (
<li onClick={() => onSelectMovie(movie.imdbID)}>
<img src={movie.Poster} alt={`${movie.Title} poster`} /> <h3>{movie.Title}</h3> <p> <span>🗓</span> {movie.Year} </p> </li>
);
}

export default Movie;

components/movies/MovieDetails.jsx

import { useEffect, useState } from "react";
import Loader from "../ui/Loader";
import StarRating from "../StarRating";

const KEY = "86da3408";

function MovieDetails({ selectedId, onCloseMovie }) {
const [movie, setMovie] = useState({});
const [isLoading, setIsLoading] = useState(false);

const {
Title: title,
Year: year,
Poster: poster,
Runtime: runtime,
imdbRating,
Plot: plot,
Released: released,
Actors: actors,
Director: director,
Genre: genre,
} = movie;

useEffect(() => {
async function fetchMovie() {
setIsLoading(true);
const res = await fetch(
`https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
);
const data = await res.json();
setMovie(data);
setIsLoading(false);
}

```
fetchMovie();
```

}, [selectedId]);

return ( <div className="details">
{isLoading ? ( <Loader />
) : (
<> <header> <button className="btn-back" onClick={onCloseMovie}>
← </button> <img src={poster} alt={title} /> <div className="details-overview"> <h2>{title}</h2> <p>
{released} • {runtime} </p> <p>{genre}</p> <p>
⭐ {imdbRating} IMDb rating </p> </div> </header>

```
      <section>
        <div className="rating">
          <StarRating maxRating={10} size={24} />
        </div>
        <p>
          <em>{plot}</em>
        </p>
        <p>Starring {actors}</p>
        <p>Directed by {director}</p>
      </section>
    </>
  )}
</div>
```

);
}

export default MovieDetails;

components/movies/WatchedMovieList.jsx

function WatchedMovieList({ watched }) {
return ( <ul className="list">
{watched.map((movie) => ( <li key={movie.imdbID}> <img src={movie.Poster} alt={movie.Title} /> <h3>{movie.Title}</h3> <p>⭐ {movie.imdbRating}</p> <p>🌟 {movie.userRating}</p> <p>⏳ {movie.runtime} min</p> </li>
))} </ul>
);
}

export default WatchedMovieList;

---------------- Watched ----------------

components/watched/WatchedSummary.jsx

import { average } from "../../utils/average";

function WatchedSummary({ watched }) {
const avgImdbRating = average(watched.map((m) => m.imdbRating));
const avgUserRating = average(watched.map((m) => m.userRating));
const avgRuntime = average(watched.map((m) => m.runtime));

return ( <div className="summary"> <h2>Movies you watched</h2> <p>#️⃣ {watched.length} movies</p> <p>⭐ {avgImdbRating.toFixed(1)}</p> <p>🌟 {avgUserRating.toFixed(1)}</p> <p>⏳ {avgRuntime} min</p> </div>
);
}

export default WatchedSummary;

---------------- Utils ----------------

utils/average.js

export const average = (arr) =>
arr.reduce((acc, cur) => acc + cur / arr.length, 0);

---------------- App.js ----------------

import { useEffect, useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Search from "./components/navbar/Search";
import NumResults from "./components/navbar/NumResults";

import Main from "./components/layout/Main";
import Box from "./components/layout/Box";

import MovieList from "./components/movies/MovieList";
import MovieDetails from "./components/movies/MovieDetails";
import WatchedSummary from "./components/watched/WatchedSummary";
import WatchedMovieList from "./components/movies/WatchedMovieList";

import Loader from "./components/ui/Loader";
import ErrorMessage from "./components/ui/ErrorMessage";

const KEY = "86da3408";

function App() {
const [query, setQuery] = useState("");
const [movies, setMovies] = useState([]);
const [watched, setWatched] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const [selectedId, setSelectedId] = useState(null);

function handleSelectMovie(id) {
setSelectedId((cur) => (cur === id ? null : id));
}

function handleCloseMovie() {
setSelectedId(null);
}

useEffect(() => {
async function fetchMovies() {
try {
setLoading(true);
setError("");
const res = await fetch(
`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
);
const data = await res.json();
if (data.Response === "False") throw new Error("Movie not found");
setMovies(data.Search);
} catch (err) {
setError(err.message);
} finally {
setLoading(false);
}
}

```
if (query.length < 3) {
  setMovies([]);
  setError("");
  return;
}

fetchMovies();
```

}, [query]);

return (
<> <Navbar> <Search query={query} setQuery={setQuery} /> <NumResults movies={movies} /> </Navbar>

```
  <Main>
    <Box>
      {loading && <Loader />}
      {!loading && !error && (
        <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
      )}
      {error && <ErrorMessage message={error} />}
    </Box>

    <Box>
      {selectedId ? (
        <MovieDetails
          selectedId={selectedId}
          onCloseMovie={handleCloseMovie}
        />
      ) : (
        <>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </>
      )}
    </Box>
  </Main>
</>
```

);
}

export default App;
