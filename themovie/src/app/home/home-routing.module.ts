import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movie/:id',
    component: MoviedetailComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
