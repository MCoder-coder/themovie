import { MovieService } from './../../../core/service/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetail } from 'src/app/core/models/moviedetail';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss']
})
export class MoviedetailComponent implements OnInit {


  movie:MovieDetail;
  isLoading: boolean;



  constructor( private route:ActivatedRoute,
    private router:Router,
    private apiService:MovieService) { }

  ngOnInit(): void {

    let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.isLoading = true;
    this.apiService.getMovieDetail(id).subscribe(result => {
      this.movie = result
      console.log("result de detalle del id" , result)
    });

  }






}
