import { Component, OnInit } from '@angular/core';
import { Movie, moviesData } from 'src/app/data';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movieschedule',
  templateUrl: './movieschedule.component.html',
  styleUrls: ['./movieschedule.component.css']
})
export class MoviescheduleComponent implements OnInit{
  moviesD: Movie[] | undefined;
  watchlist: Movie[] = [];
  showList: boolean = false;

  constructor(private localStorage: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this.moviesD = moviesData;
    const list = this.localStorage.getData('watchlist');
    console.log(this.moviesD);
  
    this.watchlist = list != null ? JSON.parse(list) : [];
  
    // Utiliza una función de comparación personalizada para findIndex
    
  
    this.moviesD.forEach((mov) => {
      const findMovieIndex = (movie: Movie) => movie.Title === mov.Title;
      const index = this.watchlist.findIndex(findMovieIndex);
      if (index !== -1) {
        mov.islist = true;
      }
    });
  
    console.log(this.watchlist);
  }

  addToList(mov: Movie){
    mov.islist = true;
      this.watchlist?.push(mov);
      console.log(this.watchlist);
      this.localStorage.saveData('watchlist', JSON.stringify(this.watchlist));
  }
  removeOfList(mov: Movie){
    mov.islist = false;
    const pos = this.watchlist.indexOf(mov);
    this.watchlist.splice(pos,1);
    this.localStorage.saveData('watchlist', JSON.stringify(this.watchlist));
  }
 
  toggleList(): void {
    this.showList = !this.showList;
  }
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
  optionSelected(selectedValue: string) {
    if (selectedValue === "None") {
      // Restablecer la lista original
      this.moviesD = moviesData.slice();
  } else if (selectedValue === "Released") {
        // Ordenar por fecha de lanzamiento
        this.moviesD = this.moviesD != undefined? this.moviesD.sort((a, b) => new Date(a.ReleasedDate).getTime() - new Date(b.ReleasedDate).getTime()) : [];
    } else if (selectedValue === "Title") {
      // Ordenar por título
      this.moviesD = this.moviesD != undefined? this.moviesD.sort((a, b) => a.Title.localeCompare(b.Title)): [];
  }
}
detailL(mov: Movie){
  const findMovieIndex = (movie: Movie) => movie.Title === mov.Title;
  const index =  this.moviesD!=undefined? this.moviesD.findIndex(findMovieIndex): -1;
  if(index  !== -1){
    this.router.navigate([`/detail/${index}`])
  }
}

}
