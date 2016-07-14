import React from 'react'

function Edit (props) {
  return (
    <div className="update container">
      <label>Find Name to Update:</label>
      <input onChange={props.onChangeName} />
      <br />
      <label>Change Name Here:</label>
      <input onChange={props.onChangeNewName} />
      <br />
      <label>Change Playlist Here:</label>
      <input onChange={props.onChangeNewPlaylist} />
      <br />
      <button onClick={props.onSubmit}>Change It!</button>
      <hr></hr>
  </div>
  )
}











export default Edit;
