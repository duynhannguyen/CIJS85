import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./Homepage.css";
const Homepage = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() =>{onFetchPopularMovies()
  }, []);
  const onFetchPopularMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=1e4bc58e742890ea2c9dcaeb725780ae"
      )
      .then((response) => response.json())
      .then((data) => 
      {console.log("dữ liệu", data)
      setPopular(data.results)
    })
  };
  const movieListElement = popular.map((movies) => {
    return <MovieCard data={movies} key={movies.id} />;
  });
  return (
    <div>
      <h1>Popular movies</h1>
        
      <div className="movie-list">
        {movieListElement}
      </div>
    </div>
  );
};

export default Homepage;
