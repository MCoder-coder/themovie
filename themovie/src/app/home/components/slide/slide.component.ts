import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  images: String[] = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpeg'
  ];


}
