import React from 'react';
import {Link} from 'react-router';
import AjaxHelper from '../utils/AjaxHelpers'


const Home = React.createClass({
  render: function(){
    return(
      <div className="home">
        <section>
          <p>Curate, create, save your own movie playlists</p>
        </section>

        <section className="container">
          <h2>Browse our users handpicked movie selection</h2>
          <Link to="/playListInfo"><button>Discover</button></Link>
        </section>
    </div>
    )
  }
});

export default Home;
