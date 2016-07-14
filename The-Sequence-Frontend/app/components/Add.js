import React from 'react';

function Add(props){
  return (
    <div className="AddPlaylist container">
      <p>Add Your Playlist</p>
      <form onSubmit={props.onSubmitList}>
        <input onChange={props.onChangeAuthor} placeholder='Your First Name' type='text' />
        <input onChange={props.onChangeTitle} placeholder='Name Your Playlist' type='text' /><br/>
        <input onChange={props.onChangeMovie1} placeholder='Your Favorite Movie' type='text' /><br/>
        <input onChange={props.onChangeMovie2} placeholder='Add Another' type='text' /><br/>
        <input onChange={props.onChangeMovie3} placeholder='Come On, One More!' type='text' /><br/>
        <button type='submit'>Add</button>
      </form>
      <h4>{props.listAddedMsg}</h4>
    </div>
  );
}

export default Add;
