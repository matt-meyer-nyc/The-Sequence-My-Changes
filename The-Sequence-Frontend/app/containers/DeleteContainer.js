import React from 'react';
import Delete from '../components/Delete';
import AjaxHelpers from '../utils/AjaxHelpers';

const DeleteContainer = React.createClass({
 getInitialState: function(){
   return {
     name: ''
   }
 },

 nameInput: function (e) {
   this.setState({
     name: e.target.value
   })
 },
  onSubmit: function () {
   console.log("delete name", this.state.name);
   const name = {
    name: this.state.name
   };
   AjaxHelpers.deleteName(name)
   .then(function(response){
     console.log("response.data",response.data);
     this.setState({
       name: response.data
     });
   }.bind(this));
 },

 render: function () {
   return (

     <Delete
       nameToDelete={this.state.name}
       onChange={this.nameInput}
       onSubmit={this.onSubmit}
       />
   )
 }
});

export default DeleteContainer;
