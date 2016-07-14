import axios from 'axios';

const AjaxHelpers = {

  findMovie: function(something) {
    return axios.get('https://api-public.guidebox.com/v1.43/US/' + 'rKQmq5ZevhQ2PsowXhi1kZF0NvAB187o' + '/search/movie/title/+', something);
  },
  getMovies: function(movieArray){
    return axios.get('https://api-public.guidebox.com/v1.43/US/' + 'rKQmq5ZevhQ2PsowXhi1kZF0NvAB187o' + '/search/movie/title/+' + movieArray +'/exact')
  },
  showMovies: function(){
    return axios.get('http://localhost:3000/movies');
  },
  addMovies: function(AddPlayList){
    return axios.post('https://sequence-backend.herokuapp.com/movies/add', AddPlayList);
  },
  findPlaylist: function(name) {
    return axios.get('https://sequence-backend.herokuapp.com/movies/' + name.name)
  },
  deleteName: function (name) {
    return axios.delete('https://sequence-backend.herokuapp.com/movies/' + name.name)
  },
  updateInfo: function (updateInfo) {
    return axios.put('https://sequence-backend.herokuapp.com/movies/' + updateInfo.name, updateInfo)
  }
}

export default AjaxHelpers;
