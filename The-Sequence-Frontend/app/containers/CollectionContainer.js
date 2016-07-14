import React from 'react';
import axios from 'axios';
import AjaxHelper from '../utils/AjaxHelpers';

const CollectionContainer = React.createClass({

  render: function(){
    return(
      <div className="collection">

        <section>
          <span>
            <h1>Mind Bending</h1>
            <p>A personal & subjective review of films that left an impact on me throughout my life, from the 70s to present.</p>
            <p>By Malcoml Jones</p>
          </span>
        </section>

        <section className="container">
          <p>30 films in this collection</p>

          <nav>
            <ul>
              <li>
                <a href="#">
                  <img src="http://static-api.guidebox.com/thumbnails_movies_medium/19290-1135112900-5343494471-1794592925-medium-240x342.jpg"/>
                  <section>
                    <h3>The Matrix (1999)</h3>
                  </section>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="http://static-api.guidebox.com/thumbnails_movies_medium/19290-1135112900-5343494471-1794592925-medium-240x342.jpg"/>
                  <section>
                    <h3>The Matrix (1999)</h3>
                  </section>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="http://static-api.guidebox.com/thumbnails_movies_medium/19290-1135112900-5343494471-1794592925-medium-240x342.jpg"/>
                  <section>
                    <h3>The Matrix (1999)</h3>
                  </section>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="http://static-api.guidebox.com/thumbnails_movies_medium/19290-1135112900-5343494471-1794592925-medium-240x342.jpg"/>
                  <section>
                    <h3>The Matrix (1999)</h3>
                  </section>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="http://static-api.guidebox.com/thumbnails_movies_medium/19290-1135112900-5343494471-1794592925-medium-240x342.jpg"/>
                  <section>
                    <h3>The Matrix (1999)</h3>
                  </section>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="http://static-api.guidebox.com/thumbnails_movies_medium/19290-1135112900-5343494471-1794592925-medium-240x342.jpg"/>
                  <section>
                    <h3>The Matrix (1999)</h3>
                  </section>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="http://static-api.guidebox.com/thumbnails_movies_medium/19290-1135112900-5343494471-1794592925-medium-240x342.jpg"/>
                  <section>
                    <h3>The Matrix (1999)</h3>
                  </section>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="http://static-api.guidebox.com/thumbnails_movies_medium/19290-1135112900-5343494471-1794592925-medium-240x342.jpg"/>
                  <section>
                    <h3>The Matrix (1999)</h3>
                  </section>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="http://static-api.guidebox.com/thumbnails_movies_medium/19290-1135112900-5343494471-1794592925-medium-240x342.jpg"/>
                  <section>
                    <h3>The Matrix (1999)</h3>
                  </section>
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section>
          <div className="container">
              <p>Discussion</p>
              <form>
                <label for="">
                  <textarea
                    name="name"
                    rows="1"
                    type="text"
                    placeholder="What do you think of this collection?">
                  </textarea>
                </label>
                <div>
                  <button type="button">Submit</button>
                </div>
              </form>
              <article>
                <div>
                  <a href="#">Julio Montas</a>
                  <p>The Most Eye-Popping and Imaginative Movie of the Year Gannett. Breaking box office records</p>
                </div>
              </article>
              <article>
                <div>
                  <a href="#">Matt Montas</a>
                  <p>The Most Eye-Popping and Imaginative Movie of the Year Gannett. Breaking box office records</p>
                </div>
              </article>
              <article>
                <div>
                  <a href="#">Julio Montas</a>
                  <p>The Most Eye-Popping and Imaginative Movie of the Year Gannett. Breaking box office records</p>
                </div>
              </article>
          </div>
        </section>
      </div>
    )
  }
});

export default CollectionContainer;
