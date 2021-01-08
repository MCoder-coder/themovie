
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SwiperComponent } from './components/swiper/swiper.component';



@NgModule({
  declarations: [HomeComponent, SwiperComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,

  ],
  exports: [
    SwiperComponent
  ]
})
export class HomeModule {


}
