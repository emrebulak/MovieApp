import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movies/movie';
import { Location } from '@angular/common';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie | any;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id).subscribe(movie => this.movie = movie);
  }

  save(): void {
    this.movieService.update(this.movie).subscribe(() => {
      this.location.back();
    });
  }

}
