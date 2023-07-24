import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";
const MovieCard = (props) => {
  const { data, key } = props;
  const { title, poster_path, id } = data;
  const imgURL = `https://image.tmdb.org/t/p/original${poster_path}`;
  return (
    <Link to={`/movies/:${id}`} className="popular-ele">
      <div>
        <img src={imgURL} alt={title} />
        <h6>{title}</h6>
      </div>
    </Link>
  );
};

export default MovieCard;
