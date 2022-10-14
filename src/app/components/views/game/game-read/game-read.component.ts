import { Component, OnInit } from '@angular/core';
import { Game } from '../game.model';
import { GameService } from '../game.service';


@Component({
  selector: 'app-game-read',
  templateUrl: './game-read.component.html',
  styleUrls: ['./game-read.component.css']
})
export class GameReadComponent implements OnInit {

  game: Game[] = [];

  displayedColumns: string[] = ['gameId', 'gameName', 'gameDescription', 'gameNote', 'actions'];

  constructor(private service: GameService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(answer => {
      console.log(answer);
      this.game = answer;
    })
  }


}
