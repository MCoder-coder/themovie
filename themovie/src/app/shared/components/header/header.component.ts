
import { AfterViewInit, Component, OnInit } from '@angular/core';
// import Swiper styles



// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  images: String[] = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpeg',
  ];

  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    var mySwiper = new Swiper('.swiper-container', {

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }


}


