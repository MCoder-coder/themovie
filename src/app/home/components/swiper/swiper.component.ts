import { Swiper } from 'swiper/bundle';
import { AfterViewInit, Component, OnInit } from '@angular/core';
// import Swiper styles
import 'swiper/swiper-bundle.css';
import { MovieService } from './../../../core/service/movie.service';

// import Swiper styles
import { MoviePopularity } from "../../../core/models/moviepopularity";
import { TrendingMovies } from 'src/app/core/models/movietrending';




@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit , AfterViewInit {

  mySwiper: Swiper;

  moviePopularity : TrendingMovies[] = []

  constructor(private movieService: MovieService) { }





  ngOnInit(): void {
    this.fetchMovies()


  }

  ngAfterViewInit() {

    this.mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      autoplay: {
        delay: 2000,
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });


  }


  fetchMovies(){
    this.movieService.getTrendingMovies()
      .subscribe( moviespopularity => {
        this.moviePopularity = moviespopularity
      })

   }

}
