import React from 'react';
import List from '../components/List';
import AjaxHelpers from '../utils/AjaxHelpers';

const ListContainer = React.createClass({
  getInitialState: function() {
    return {
      ajaxReturn: [],
      title: ''
    };
  },

  titleInput: function (e) {
    this.setState({
      title: e.target.value
    })
  },

  onSubmitInfo: function () {
    console.log('clicked');
    const movieName = {
      title: this.state.title
    };
    AjaxHelpers.findMovie()
    .then(function(response){
      this.setState({
        ajaxReturn: response.data.results
      });
    }.bind(this));
  },

  render: function(){



    return(
      <div>
        <List
        movieInfo={this.state.ajaxReturn}
        titleInput={this.titleInput}
        onSubmitInfo={this.onSubmitInfo}
          />
      </div>
    )
  }
});

export default ListContainer;
