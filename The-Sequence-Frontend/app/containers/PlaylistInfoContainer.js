import React from 'react';
import PlaylistInfo from '../components/PlaylistInfo';
import AjaxHelpers from '../utils/AjaxHelpers';

const PlaylistInfoContainer = React.createClass({
 getInitialState: function(){
   return {
     name: '',
     playListDetails: []
   }
 },
 nameFind: function (e) {
   this.setState({
     name: e.target.value
   })
 },

  onSubmit: function (e) {
    console.log("did mount");
    console.log("find this name", this.state.name);

    const details = {
      name: this.state.name,
    };
   AjaxHelpers.findPlaylist(details)
   .then(function(response) {
     console.log ('response data:', response.data)
     this.setState({
       playListDetails: response.data
       });
     }.bind(this));
   },
    render: function () {
      return (

          <PlaylistInfo
         usersList={this.state.playListDetails}
          onChange={this.nameFind}
          onSubmit={this.onSubmit}
        />

      );
    }
  });



export default PlaylistInfoContainer;
