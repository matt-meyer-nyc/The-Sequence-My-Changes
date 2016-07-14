import React from 'react';

function Header(props){
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/#/add">+ Add Your List</a><br/>
            <a href="/#/delete">- Delete Your List</a><br/>
            <a href="/#/edit">~ Update Name/Playlist Title</a>
          </li>

          <li><h1><a href="/#/"><span>The</span>Sequence</a></h1></li>

          <li>
            <a href="/#/list">Newest Movie Ideas for a Playlist</a><br/>
            <a href="/#/playListInfo">Discover Playlists</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
