import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { MoviescheduleComponent } from './components/movieschedule/movieschedule.component';

const routes: Routes = [
  {path:'', component: MoviescheduleComponent},
{path:'detail/:id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
