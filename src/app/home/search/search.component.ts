import { Component, OnInit } from '@angular/core';
import { MovieUpcoming } from 'src/app/core/models/movieupcoming';
import { MovieService } from 'src/app/core/service/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movieUpcoming : MovieUpcoming[]

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.fetchMovieUpcoming()
  }


  fetchMovieUpcoming(){
    this.movieService.getMovieUpcoming()
   .subscribe(movieUpcomingResponse => {
      this.movieUpcoming = movieUpcomingResponse
      console.log("movieUpcoming" ,movieUpcomingResponse)
   })
  }

}
