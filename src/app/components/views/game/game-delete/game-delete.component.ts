import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Game } from "../game.model";
import { GameService } from "../game.service";

//delete a game
@Component({
  selector: "app-game-delete",
  templateUrl: "./game-delete.component.html",
  styleUrls: ["./game-delete.component.css"],
})
export class GameDeleteComponent implements OnInit {
  game: Game = {
    gameId: "",
    gameName: "",
    gameDescription: "",
    gameNote: "",
  };

  constructor(
    private service: GameService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.game.gameId = this.route.snapshot.paramMap.get("gameId")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.game.gameId!).subscribe((answer) => {
      this.game = answer;
      console.log(answer);
    });
  }

  deleteGame(): void {
    this.service.deleteGame(this.game.gameId!).subscribe(
      (answer) => {
        this.router.navigate(["game"]);
        this.service.message("Successfully deleted!");
      },
      (err) => {
        this.service.message(err.error.error);
      }
    );
  }

  cancel(): void {
    this.router.navigate(["game"]);
  }
}
