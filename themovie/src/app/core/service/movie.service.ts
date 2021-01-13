import { MovieUpcoming } from './../models/movieupcoming';
import { Movie } from './../models/movie.model';
import { Router } from '@angular/router';
import { Inject, NgModule} from '@angular/core';

import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';

import { environment } from './../../../environments/environment';
import { MoviePopularity } from '../models/moviepopularity';
import { TrendingMovies } from '../models/movietrending';
import { MovieDetail } from '../models/moviedetail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService{


  private apikey = "c00d247769b9b9c80ee0ab36c73ac18d";
  private urlMovieDb = "https://api.themoviedb.org/3/";


  constructor(private http: HttpClient){}


  getMovies(page : number){
   // return this.http.get<Movie[]>( `${this.urlMovieDb}` +  'discover/movie?api_key=' + `${this.apikey}` + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page' + `${page}` )
    return this.http.get<Movie>(  `${this.urlMovieDb}` +`discover/movie/?sort_by=popularity.desc&api_key=` +  `${this.apikey}` + '&page=' + `${page}`)
    .pipe(
      retry(3),
      map((response: any) => response.results as Movie)
    )
  }

  getMoviesId(id: number){
    return this.http.get<Movie[]>(  `${this.urlMovieDb}` +'movie/' + `${id}`  +  `?api_key=${this.apikey}`)
    .pipe(
      retry(3),
      map((response: any) => response.results as Movie[])
    )
  }

  getMoviesPopularity(){
    return this.http.get<MoviePopularity[]>(`${this.urlMovieDb}` + 'discover/movie?with_people=108916,7467&sort_by=popularity.desc&api_key=' +  `${this.apikey}`)
    .pipe(
      retry(3),
      map((response: any) => response.results as MoviePopularity[])
    )
  }

  getTrendingMovies(){
    return this.http.get<TrendingMovies[]>(`${this.urlMovieDb}` + 'trending/all/day?api_key=' +  `${this.apikey}`)

    .pipe(
      retry(3),
      map((response: any) => response.results as TrendingMovies[])
    )
  }

  getMovieDetail(id:number):Observable<MovieDetail>{
    return this.http.get<MovieDetail>(` https://api.themoviedb.org/3/movie/${id}?api_key=${this.apikey}&language=en-US`)
    //.pipe(catchError(this.errorHandler));
  }

  getMovieUpcoming(){
    return this.http.get<MovieUpcoming>(`${this.urlMovieDb}` + 'movie/upcoming' + `?api_key=${this.apikey}` + '&language=en-US&page=1' );
  }

}
