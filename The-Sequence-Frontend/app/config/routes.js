import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import AddContainer from '../containers/AddContainer';
import ListContainer from '../containers/ListContainer';

import CollectionContainer from '../containers/CollectionContainer';

import SearchContainer from '../containers/SearchContainer';
import PlaylistInfoContainer from '../containers/PlaylistInfoContainer'
import DeleteContainer from '../containers/DeleteContainer';
import EditContainer from '../containers/EditContainer'
import UserContainer from '../containers/UserContainer';

const routes =(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='add' component={AddContainer} />
      <Route path='CollectionName' component={CollectionContainer} />
      <Route path='list' component={ListContainer} />
      <Route path='search' component={SearchContainer} />
      <Route path='playlistInfo' component={PlaylistInfoContainer} />
      <Route path='delete' component={DeleteContainer} />
      <Route path='edit' component={EditContainer} />
      <Route path='user' component={UserContainer} />
    </Route>
  </Router>
);

export default routes;
