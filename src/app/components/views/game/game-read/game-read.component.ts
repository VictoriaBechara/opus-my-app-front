import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-read',
  templateUrl: './game-read.component.html',
  styleUrls: ['./game-read.component.css']
})
export class GameReadComponent implements OnInit {

  game: Game[] = [];

  displayedColumns: string[] = ['gameId', 'gameName', 'gameDescription', 'gameNote', 'platform', 'actions'];

  constructor(private service: GameService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(answer => {
      console.log(answer);
      this.game = answer;
    })
  }

  NavToGameCreate(){
    this.router.navigate(["game/createGame"])
  }

}
