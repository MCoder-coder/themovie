import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { CoreModule } from './core/core.module';
import { APP_INITIALIZER } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';

import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    CoreModule,
    HttpClientModule,
    InfiniteScrollModule,
    // Specify ng-circle-progress as an import
   
 

  ],
  providers: [




  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
