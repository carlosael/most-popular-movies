import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false"
    )
      .then((resposta) => resposta.json())
      .then((data) => setMovies(data.results));
      console.log(movies)
  }, []);

  return (
    <>
    <header>
      <h1>MAXMOVIES</h1>
      <span>Todos os lançamentos em um só lugar!</span>
    </header>
    <div className="movies">
      {movies.map((movie) => (
        <div className="movie" key={movie.title}>
          <img src={movie.poster_path} alt={movie.title} />
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default App;
