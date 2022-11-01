import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Game } from "../game.model";
import { GameService } from "../game.service";

//create a new game
@Component({
  selector: "app-game-create",
  templateUrl: "./game-create.component.html",
  styleUrls: ["./game-create.component.css"],
})
export class GameCreateComponent implements OnInit {
  gameName = new FormControl("", [Validators.minLength(3)]);
  gameDescription = new FormControl("", [Validators.minLength(10)]);
  gameNote = new FormControl("", [Validators.minLength(1)]);

  constructor(
    private service: GameService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  platformId: String = "";

  game: Game = {
    gameName: "",
    gameDescription: "",
    gameNote: "",
  };

  ngOnInit(): void {}

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

  createGame(): void {
    this.service.createGame(this.game).subscribe(
      (answer) => {
        this.router.navigate([`game`]);
        this.service.message("game created successfully!");
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.message(err.error.errors[i].message);
        }
      }
    );
  }

  cancel(): void {
    this.router.navigate([`game`]);
  }
}
