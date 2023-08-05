import { Movie } from './../../../core/models/movie.model';

import { MovieService } from './../../../core/service/movie.service';
import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetail } from 'src/app/core/models/moviedetail';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input()movieModels : Movie

  @Input() movie : Movie

  //@Input() movie : Movie
  @Output() eventClicked: EventEmitter<any> = new EventEmitter();

  page: number;
  private actualPage: number;
  private nextPage: number;
  private isLoading: Boolean;

  moviedetail:MovieDetail;


  movieArrays: Movie[] = []

  constructor(private movieService: MovieService ,   private route:ActivatedRoute,
    private router:Router) {

    this.movieArrays = new Array<Movie>()
    this.page = 1
    this.actualPage = 1
    this.nextPage = 0

    this.isLoading = false
  }

  ngOnInit(): void {

    this.fetchMovies(this.actualPage);


  }

   fetchMovies(page : number){
     this.isLoading = true
    this.movieService.getMovies(page)
     .subscribe(( movies : any) => {

      this.isLoading = false


      if(movies){

        if(page >= this.actualPage){

          console.log(this.actualPage)
          console.log(movies)

          //console.log(this.movieArrays.push(...movies))

          return movies[this.movieArrays.push(...movies)]
        }


      }



     });
   }




  onSelect(suggestion:Movie){
    this.router.navigate(['/movie', suggestion.id]);

    console.log("id movie " , suggestion.id )
  }




  onScroll() {
    console.log('scrolled down!!');
    if (!this.isLoading) {

      this.actualPage++
      this.nextPage = this.actualPage + 1;

        //refactorizar a: getEventosPage
      this.fetchMovies(this.actualPage)
    }


  }



}
