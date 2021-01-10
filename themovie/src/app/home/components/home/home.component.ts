import { MovieService } from './../../../core/service/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from './../../../core/models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  uri =  'http://image.tmdb.org/t/p/w500/';
  
  movieArrays: Movie[] = []

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.fetchMovies();
  }

   fetchMovies(){
    this.movieService.getMovies()
     .subscribe(movies => {
      this.movieArrays = movies
       console.log( movies)
     });
   }

}
