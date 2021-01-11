
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { SlideComponent } from './components/slide/slide.component';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';



@NgModule({
  declarations: [HomeComponent, SwiperComponent, SlideComponent, MoviedetailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,

  ],
  exports: [
    SlideComponent,
    SwiperComponent
  ]
})
export class HomeModule {


}
