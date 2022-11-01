import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Game } from "../game.model";
import { GameService } from "../game.service";

@Component({
  selector: "app-game-update",
  templateUrl: "./game-update.component.html",
  styleUrls: ["./game-update.component.css"],
})
export class GameUpdateComponent implements OnInit {
  gameName = new FormControl("", [Validators.minLength(5)]);
  gameDescription = new FormControl("", [Validators.minLength(10)]);
  gameNote = new FormControl("", [Validators.minLength(1)]);

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
    this.game.gameId = this.route.snapshot.paramMap.get("gameId")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.game.gameId!).subscribe((answer) => {
      this.game.gameName = answer.gameName;
      this.game.gameDescription = answer.gameDescription;
      this.game.gameNote = answer.gameNote;
    });
  }

  updateGame(): void {
    this.service.updateGame(this.game).subscribe(
      (answer) => {
        this.router.navigate(["game"]);
        this.service.message("Successfully updated!");
      },
      (err) => {
        this.service.message("operation fail");
      }
    );
  }

  getMessage() {
    if (this.gameName.invalid) {
      return "5 - 100 characters";
    }

    if (this.gameDescription.invalid) {
      return "10 - 1000 characters";
    }

    if (this.gameNote.invalid) {
      return " be free to give the note ";
    }

    return false;
  }

  cancel(): void {
    this.router.navigate(["game"]);
  }
}
