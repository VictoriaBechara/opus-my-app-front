import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameAddComponent } from "./components/views/game/game-add/game-add.component";
import { GameAllComponent } from "./components/views/game/game-all/game-all.component";
import { GameCreateComponent } from "./components/views/game/game-create/game-create.component";
import { GameDeleteComponent } from "./components/views/game/game-delete/game-delete.component";
import { GameReadAllComponent } from "./components/views/game/game-read-all/game-read-all.component";
import { GameReadComponent } from "./components/views/game/game-read/game-read.component";
import { GameRemoveComponent } from "./components/views/game/game-remove/game-remove.component";
import { GameUpdateComponent } from "./components/views/game/game-update/game-update.component";
import { HomeComponent } from "./components/views/home/home.component";
import { PlatformCreateComponent } from "./components/views/platform/platform-create/platform-create.component";
import { PlatformDeleteComponent } from "./components/views/platform/platform-delete/platform-delete.component";
import { PlatformReadComponent } from "./components/views/platform/platform-read/platform-read.component";
import { PlatformUpdateComponent } from "./components/views/platform/platform-update/platform-update.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "game",
    component: GameReadComponent,
  },
  {
    path: "platform",
    component: PlatformReadComponent,
  },
  {
    path: "game/createGame",
    component: GameCreateComponent,
  },
  {
    path: "platform/createPlatform",
    component: PlatformCreateComponent,
  },
  {
    path: "game/deleteGame/:gameId",
    component: GameDeleteComponent,
  },
  {
    path: "platform/deletePlatform/:platformId",
    component: PlatformDeleteComponent,
  },
  {
    path: "game/updateGame/:gameId",
    component: GameUpdateComponent,
  },
  {
    path: "platform/updatePlatform/:platformId",
    component: PlatformUpdateComponent,
  },
  {
    path: "platform/:platformId/game",
    component: GameReadAllComponent,
  },
  {
    path: "genre/:genreId/game",
    component: GameReadAllComponent,
  },

  {
    path: "platform/:platformId/game/:gameId",
    component: GameAllComponent,
  },
  {
    path: "genre/:genreId/game/:gameId",
    component: GameAllComponent,
  },
  {
    path: "platform/:platformId/addGame",
    component: GameAddComponent,
  },
  {
    path: "platform/:platformId/game/:gameId/remove",
    component: GameRemoveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
