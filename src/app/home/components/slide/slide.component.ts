import { MovieUpcoming } from './../../../core/models/movieupcoming';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/service/movie.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  movieUpcoming : MovieUpcoming[] = []

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {

  }


  fetchMovieUpcoming(){
    this.movieService.getMovieUpcoming()
   .subscribe(movieUpcomingResponse => {
      this.movieUpcoming = []
      this.movieUpcoming.push(movieUpcomingResponse)


      console.log("movieUpcoming" ,movieUpcomingResponse)
   })
  }




}
