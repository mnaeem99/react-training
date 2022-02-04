import 'bootstrap/dist/css/bootstrap.min.css';

function MovieList(props) {
	return (
		<>
		{props.movies.map((movie) => (
        <div class="col-md-3 col-md-offset-1">
          <img src={movie.Poster}  alt={movie.Title} />
          <h4>{movie.Title}</h4>
          <p>{movie.Type}</p>
          <p>{movie.imdbID}</p>
          <p>{movie.Year}</p> 
          <button>Add to Favorites</button>		    
        </div>
			))}
		</>
	);
};

export default MovieList;