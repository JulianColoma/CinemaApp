import { Component, OnInit } from '@angular/core';
import { Movie, moviesData } from 'src/app/data';

@Component({
  selector: 'app-movieschedule',
  templateUrl: './movieschedule.component.html',
  styleUrls: ['./movieschedule.component.css']
})
export class MoviescheduleComponent implements OnInit{
  moviesD: Movie[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.moviesD = moviesData; // Asigna los datos a la propiedad del componente
    console.log(this.moviesD);
  }
}
