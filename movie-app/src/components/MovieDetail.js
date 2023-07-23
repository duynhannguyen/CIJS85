import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const MovieDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [movieDetail, setMovieDetail] = useState({});
  const fetchMovieDetail = (movieId) => {
    const apiURL = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=1e4bc58e742890ea2c9dcaeb725780ae`;
    console.log("url", apiURL);
    fetch(
      apiURL
      )
      .then((response) => response.json())
      .then((data) => 
      {console.log("movieDetail", data)
      setMovieDetail(data)
    })
  };
  useEffect(() => {
    fetchMovieDetail();
  }, []);
  const { title, poster_path, backdrop_path } = movieDetail;
  return (
    <div>
      <h1> {title}</h1>
    </div>
  );
};

export default MovieDetail;
