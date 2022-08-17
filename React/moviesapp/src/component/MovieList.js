import React, { Component } from "react";
import { movies } from '../movieData'
import axios from 'axios';

export class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      hover: "",
      movies:[],
      currPage:1,
      parr:1

    };
  }
async componentDidMount(){
  const res=await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=afa002e465a037776767081e7db45d15&language=en-US&page=2')
 // console.log(res.data)

let moviesDataFromApi=res.data;
this.setState({
  movies:[...moviesDataFromApi.results],
})

}
  render() {

    let movieData = movies.results
   // console.log(movieData)
    return (
      <>
        <div>
          <h3 className="text-center">
            <strong>Trending</strong>
          </h3>
        </div>


        <div className="movies-list">

          {this.state.movies.map((movieEle) => (
            <div class="card movie-card" 
          onMouseEnter={() => this.setState({ hover: movieEle.id })} 
          onMouseLeave={() => this.setState({ hover: "" })} >
              <img src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`} class="card-img-top movie-img" alt="..." style={{ height: '40vh', width: '20vw' }} />

              <h5 class="card-title movie-title">{movieEle.original_title}</h5>
                  {this.state.hover==movieEle.id &&              
              <a href='#' className="btn btn-primary movie-button">Add to Favorites</a>
             
                  }
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link">Previous</a>
              </li>
              <li></li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>




            </ul>
          </nav>

        </div>
      </>
    );
  }
}

export default MovieList;