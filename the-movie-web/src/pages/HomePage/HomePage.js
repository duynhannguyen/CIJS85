import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Header from "../../component/Header/Header";
import MovieCard from "../../component/MovieCard/MovieCard";
const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetchPopularMovie();
  }, []);
  const fetchPopularMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=1e4bc58e742890ea2c9dcaeb725780ae"
    )
      .then((response) => response.json())
      .then((data) => {
        setPopularMovies(data.results);
      });
  };
  const PopularMovieList = popularMovies.map((movie) => {
    return <MovieCard data={movie} key={movie.id} />;
  });
  return (
    <div>
      <Header />
      <div className="popular-movie">{PopularMovieList}</div>
    </div>
  );
};

export default HomePage;
