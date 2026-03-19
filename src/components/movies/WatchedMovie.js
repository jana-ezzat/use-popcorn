function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li className="watched-movie">
      <img src={movie.poster} alt={`${movie.title} poster`} />

      <div className="watched-movie-details">
        <h3>{movie.title}</h3>
        <div>
          <p>
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>

          <p>
            <span>🌟</span>
            <span>{movie.userRating ?? "-"}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </p>
          <button
            className="btn-delete"
            onClick={() => onDeleteWatched(movie.imdbID)}>X</button>
        </div>
      </div>
    </li>
  );
}

export default WatchedMovie;
