import { Swiper } from 'swiper/bundle';
import { AfterViewInit, Component, OnInit } from '@angular/core';
// import Swiper styles
import 'swiper/swiper-bundle.css';


@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit , AfterViewInit {




  images: String[] = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpeg'
  ];

  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    var mySwiper = new Swiper('.swiper-container', {

      loop: true,

      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },

      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
