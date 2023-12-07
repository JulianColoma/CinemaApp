import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, moviesData } from 'src/app/data';
//import { YouTubePlayer }  from '@angular/youtube-player';
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
  width:number = 0;
  height: number =0;

  constructor(
    private activatedRouter : ActivatedRoute,
   //private youtubePlayerService: YouTubePlayer
   
  ) { }
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log(window.innerWidth);
    if(window.innerWidth > 600){
      this.height = 720;
      this.width = 1280;
    }else{
      this.height = window.innerWidth*(720/1280);
      this.width = window.innerWidth; 
    }
    this.movie = moviesData[id];
     this.movie.TrailerLink = this.obtainId(this.movie.TrailerLink);
  }
 
  obtainId(url: String){
    const match = url.match(/=(.*)/);
    const valorDespuesDeIgual =  match != null? match[1].trim(): '';
    return valorDespuesDeIgual;
  }
  
}
