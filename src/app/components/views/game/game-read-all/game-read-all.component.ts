import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Game } from "../game.model";
import { GameService } from "../game.service";

@Component({
  selector: "app-game-read-all",
  templateUrl: "./game-read-all.component.html",
  styleUrls: ["./game-read-all.component.css"],
})
export class GameReadAllComponent implements OnInit {
  game: Game[] = [];

  displayedColumns: string[] = ["gameName", "game", "actions"];

  platformId: String = "";

  constructor(
    private service: GameService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.platformId = this.route.snapshot.paramMap.get("platformId")!;
    this.findAll();
  }

  findAll(): void {
    this.service.findAllByPlatform(this.platformId).subscribe((answer) => {
      this.game = answer;
      console.log(this.game);
    });
  }

  NavToGameAdd() {
    this.router.navigate([`platform/${this.platformId}/addGame`]);
  }

  cancel() {
    this.router.navigate([`platform`]);
  }
}
