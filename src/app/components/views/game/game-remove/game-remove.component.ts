import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Game } from "../game.model";
import { GameService } from "../game.service";

@Component({
  selector: "app-game-remove",
  templateUrl: "./game-remove.component.html",
  styleUrls: ["./game-remove.component.css"],
})
export class GameRemoveComponent implements OnInit {
  platformId: String = "";

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

  ngOnInit(): void {
    this.platformId = this.route.snapshot.paramMap.get("platformId")!;
    this.game.gameId = this.route.snapshot.paramMap.get("gameId")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.game.gameId!).subscribe((answer) => {
      this.game = answer;
    });
  }

  remove(): void {
    this.service.remove(this.platformId, this.game.gameId!).subscribe(
      () => {
        this.router.navigate([`platform/${this.platformId}/game`]);
        this.service.message("Successfully deleted!");
      },
      (err) => {
        this.router.navigate([`platform/${this.platformId}/game`]);
        this.service.message("operation fail");
      }
    );
  }

  cancel(): void {
    this.router.navigate([`platform/${this.platformId}/game`]);
  }
}
