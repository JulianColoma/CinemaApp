import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, moviesData } from 'src/app/data';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  movie: Movie  = {
    Title: "",
  Description:"",
  Rating: 0,
  Duration: "",
  Genre: [""],
  ReleasedDate: "",
  Img: "",
  islist: false,
  TrailerLink: ""
  };
  constructor(
    private activatedRouter : ActivatedRoute
  ) { }
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.movie = moviesData[id];
    console.log(this.movie);
  }
}
