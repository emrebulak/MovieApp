import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Array<string> = ["Baran", "Emre", "Bulak"];

  constructor() { }

  ngOnInit(): void {
  }

}
