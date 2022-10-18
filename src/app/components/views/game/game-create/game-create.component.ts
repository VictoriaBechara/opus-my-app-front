import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {

  game: Game = {
    gameName: '',
    gameDescription: '',
    gameNote: ''
  }

  constructor(private service: GameService, private router: Router) { }

  ngOnInit(): void {
  }

  createGame(): void{
    this.service.createGame(this.game).subscribe((answer) => {
      this.router.navigate(['game'])
      this.service.message('game created successfully!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++) {
        this.service.message(err.error.errors[i].message);
      }
    })
  }

  cancel(): void {
    this.router.navigate(['game'])
  }
}
