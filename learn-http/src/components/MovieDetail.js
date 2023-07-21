import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const MovieDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const onHandleWatchMovie = () => {
    const isLogin = true;
    if (isLogin) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      MovieDetail
      <h2>Movie ID:{params.id}</h2>
      <button onClick={onHandleWatchMovie}>Xem phim</button>
    </div>
  );
};

export default MovieDetail;
