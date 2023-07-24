import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const fetchMovieDetail = (movieId) => {
    const MovieDetailURL = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=1e4bc58e742890ea2c9dcaeb725780ae`;
    fetch(MovieDetailURL)
      .then((response) => response.json())
      .then((data) => {
        console.log("dataDetail", data);
      });
  };
  useEffect(() => {
    fetchMovieDetail();
  }, []);
  return (
    <div>
      <h1>MovieDetail</h1>
      <h2>MovieId: {params.movieId} </h2>
    </div>
  );
};

export default MovieDetail;
