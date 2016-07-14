import React from 'react';
import Home from './Home';

import Header from './Header';
import Footer from './Footer';
require("../sass/main.scss");


const Main = React.createClass({
  render: function(){
    return(
      <div>
        <Header/>
        <div>{this.props.children}</div>
        <Footer />
      </div>
    )
  }
});

export default Main
