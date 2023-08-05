import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { SlideComponent } from './components/slide/slide.component';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { JwPaginationComponent } from 'jw-angular-pagination';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    HomeComponent,
    SwiperComponent,
    SlideComponent,
    MoviedetailComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    InfiniteScrollModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here

      radius: 25,
      outerStrokeWidth: 2,
      innerStrokeWidth: 0,


      maxPercent: 100,
      toFixed: 0,
      titleFontSize: "12",
      backgroundColor: "#302c2c",
      showSubtitle: false,
      showUnits: false,
      backgroundPadding: 1,
      titleFontWeight :"500" ,
      innerStrokeColor: '#78C000',
      animationDuration: 300,
      titleColor: '#ffffff',
    }),
  ],
  exports: [SlideComponent, SwiperComponent],
})
export class HomeModule {}
