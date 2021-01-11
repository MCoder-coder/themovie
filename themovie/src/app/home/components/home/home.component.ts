import { Movie } from './../../../core/models/movie.model';


import { MovieService } from './../../../core/service/movie.service';
import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() movie! : Movie
  @Output() eventClicked: EventEmitter<any> = new EventEmitter();



  movieArrays: Movie[] = []

  constructor(private movieService: MovieService ) {

  }

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

   clickBtn(){
    console.log('evento clickBtn() ');
    console.log('ID CLICKEADO: ', this.movie?.id);
    this.eventClicked.emit(this.movie?.id);
  }

   // tslint:disable-next-line:typedef
   clickEvent(id: number) {
    console.log('clickEvent en event-gallery.ts');
    console.log(id);

  }

}
