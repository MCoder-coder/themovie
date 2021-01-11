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



  moviePopularity : TrendingMovies[] = []

  constructor(private movieService: MovieService) { }





  ngOnInit(): void {
    this.fetchMovies()
  }

  ngAfterViewInit() {
    var mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      autoplay: {
        delay: 5000,
      },
      spaceBetween: 30,
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
