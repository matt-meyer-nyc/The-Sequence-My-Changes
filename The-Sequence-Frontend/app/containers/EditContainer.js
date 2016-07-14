import React from 'react';
import Edit from '../components/Edit';
import AjaxHelpers from '../utils/AjaxHelpers';

const EditContainer = React.createClass ({
    getInitialState: function () {
      return {
        ajaxResponse: [],
        name: '',
        newName: '',
        newPlaylist: ''

      }
    },
    handleName: function (e) {
      this.setState({
        name: e.target.value
      })
    },

    handleNewName: function(e) {
      this.setState({
        newName: e.target.value
      })
    },

    handleNewPlaylist: function(e) {
      this.setState({
        newPlaylist: e.target.value
      })
    },


     onSubmitUpdate: function () {
       console.log("name to change", this.state.name);
       const updateInfo = {
         name: this.state.name,
         newName: this.state.newName,
         newPlaylist: this.state.newPlaylist

       };
       AjaxHelpers.updateInfo(updateInfo)
       .then(function(response) {
        console.log('response.data', response.data);
        this.setState({
          ajaxResponse: response.data
        });
      }.bind(this));
    },
    render: function () {
    return (
      <Edit
        onChangeName={this.handleName}
        onChangeNewName={this.handleNewName}
        onChangeNewPlaylist={this.handleNewPlaylist}
        onSubmit={this.onSubmitUpdate}
        />
    );
   }
  });

export default EditContainer;
