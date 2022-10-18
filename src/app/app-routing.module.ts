import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameCreateComponent } from './components/views/game/game-create/game-create.component';
import { GameDeleteComponent } from './components/views/game/game-delete/game-delete.component';
import { GameReadComponent } from './components/views/game/game-read/game-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { PlatformCreateComponent } from './components/views/platform/platform-create/platform-create.component';
import { PlatformDeleteComponent } from './components/views/platform/platform-delete/platform-delete.component';
import { PlatformReadComponent } from './components/views/platform/platform-read/platform-read.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path:"game",
    component: GameReadComponent
  },
  {
    path:"platform",
    component: PlatformReadComponent
  },
  {
    path:"platform/createPlatform",
    component: PlatformCreateComponent
  },
  {
    path: "game/createGame",
    component: GameCreateComponent
  },
  {
    path:"platform/deletePlatform/:platformId",
    component: PlatformDeleteComponent
  },
  {
    path:"game/deleteGame/:gameId",
    component: GameDeleteComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
