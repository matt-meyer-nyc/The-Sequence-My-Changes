import React from 'react';

function PlaylistInfo (props) {
  console.log("user details passed", props.usersList)
  const userListDetails = props.usersList.map((details) =>{
  return <li key={details.playlists[0].movies[0].id}>
          <h4>{details.name}</h4>
          <p>"{details.playlists[0].playlist}"</p>
          <p><strong><i>{details.playlists[0].movies[0].title}</i></strong></p>
          <p>{details.playlists[0].movies[0].release_date}</p>
          <img src={details.playlists[0].movies[0].poster} />
            <br/><hr/>
          <p><strong><i>{details.playlists[0].movies[1].title}</i></strong></p>
          <p>{details.playlists[0].movies[1].release_date}</p>
          <img src={details.playlists[0].movies[1].poster} />
            <br/><hr/>
          <p><strong><i>{details.playlists[0].movies[2].title}</i></strong></p>
          <p>{details.playlists[0].movies[2].release_date}</p>
          <img src={details.playlists[0].movies[2].poster} />
       </li>;
      });


  return (
    <div className="playListInfo container">
      <form>
      <p className="disclaimer"><i><small>*as this is a mock up for dev. purposes, please type in 'Bob', 'Matt' or your own if you've added one*</small></i></p>
      <h3>Find User Playlists By Name</h3>
      <input
        className="searchInput"
        type="text"
        onChange={props.onChange}
        />
      <button
        className="searchButton"
        type="button"
        onClick={props.onSubmit}
        >Search</button>
      </form>
      <ul>
        {userListDetails}
      </ul>
    </div>
  );
}

export default PlaylistInfo;
