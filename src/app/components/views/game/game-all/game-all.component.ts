import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Game } from "../game.model";
import { GameService } from "../game.service";

//read all information about the game
@Component({
  selector: "app-game-all",
  templateUrl: "./game-all.component.html",
  styleUrls: ["./game-all.component.css"],
})
export class GameAllComponent implements OnInit {
  constructor(
    private service: GameService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  game: Game = {
    gameId: "",
    gameName: "",
    gameDescription: "",
    gameNote: "",
  };

  gameId: String = "";
  platformId: String = "";

  ngOnInit(): void {
    this.game.gameId = this.route.snapshot.paramMap.get("gameId")!;
    this.platformId = this.route.snapshot.paramMap.get("platformId")!;
    this.findById();
  }

  findById(): void {
    this.service.findAllById(this.game.gameId!).subscribe((answer) => {
      this.game = answer;
      console.log(answer);
    });
  }

  cancel(): void {
    this.router.navigate([`platform/${this.platformId}/game`]);
  }
}
