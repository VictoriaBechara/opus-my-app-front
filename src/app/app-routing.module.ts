import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameReadComponent } from './components/views/game/game-read/game-read.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path:"game",
    component: GameReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
