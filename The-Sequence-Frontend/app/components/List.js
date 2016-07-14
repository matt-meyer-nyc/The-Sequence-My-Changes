import React from 'react';

function List(props){
  console.log(props.movieInfo);
  const details = props.movieInfo.map((movie) =>{
    return <li key={movie.id}>

          <h3>{movie.title}</h3>
          <img src={movie.poster_120x171} />
          <p>{movie.release_year}</p>

    </li>;
  });
  return (
    <div className="movieList container">
      <p>Most Recent Movie Releases</p><br/>
      <ul>
        {details}
      </ul>
      <button onClick={props.onSubmitInfo}>Show Movies</button>
    </div>
  );
}
export default List;
