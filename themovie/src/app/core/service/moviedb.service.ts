import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// Importo map reactive extentions
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})

export class MoviedbService{

  private apikey = "c00d247769b9b9c80ee0ab36c73ac18d";
  private urlMovieDb = "https://api.themoviedb.org/3/movie/";

  constructor(private http: HttpClient) { }



}
