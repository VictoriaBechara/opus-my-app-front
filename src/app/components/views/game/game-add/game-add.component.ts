import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Game } from "../game.model";
import { GameService } from "../game.service";

//add game to platform
@Component({
  selector: "app-game-add",
  templateUrl: "./game-add.component.html",
  styleUrls: ["./game-add.component.css"],
})
export class GameAddComponent implements OnInit {
  platformId: String = "";
  selectGame: Game = {} as Game;

  constructor(
    private service: GameService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  games: Game[] = [];

  displayedColumns: string[] = ["gameId", "gameName"];

  ngOnInit(): void {
    this.platformId = this.route.snapshot.paramMap.get("platformId")!;
    //this.games.gameId = this.route.snapshot.paramMap.get("gameId")!;
    this.findAll();
    this.onAddGame();
  }

  findAll() {
    this.service.findAll().subscribe((answer) => {
      console.log(answer);
      this.games = answer;
    });
  }

  onAddGame(): void {
    if (this.selectGame.gameId) {
      this.service
        .addGameToPlatform(
          this.platformId,
          this.selectGame.gameId,
          this.selectGame
        )
        .subscribe(
          (answer) => {
            console.log(answer);
            this.router.navigate([`platform/${this.platformId}/game`]);
            this.service.message("game add successfully!");
          },
          (err) => {
            for (let i = 0; i < err.error.errors.length; i++) {
              this.service.message(err.error.errors[i].message);
            }
          }
        );
    }
  }

  onSelectChange(e: any): void {
    this.selectGame = e.value;
    console.log(e.value);
  }

  cancel() {
    this.router.navigate([`platform/${this.platformId}/game`]);
  }
}
