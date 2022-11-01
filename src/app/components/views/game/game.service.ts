import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Game } from "./game.model";

@Injectable({
  providedIn: "root",
})
export class GameService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAllByPlatform(platformId: String): Observable<Game[]> {
    //const url = `${this.baseUrl}/platform/${platformId}` //endpoint
    const url = `${this.baseUrl}/game?platform=${platformId}`; //mostra todos os jogos
    return this.http.get<Game[]>(url);
  }

  findAll(): Observable<Game[]> {
    const url = `${this.baseUrl}/game/all`;
    return this.http.get<Game[]>(url);
  }

  findById(gameId: String): Observable<Game> {
    const url = `${this.baseUrl}/game/${gameId}`;
    return this.http.get<Game>(url);
  }

  findByName(gameName: String): Observable<Game> {
    const url = `${this.baseUrl}/game/${gameName}`;
    return this.http.get<Game>(url);
  }

  findAllById(gameId: String): Observable<Game> {
    const url = `${this.baseUrl}/game/${gameId}`;
    return this.http.get<Game>(url);
  }

  addGameToPlatform(
    gameId: String,
    platformId: String,
    game: Game
  ): Observable<Game> {
    const url = `${this.baseUrl}/platform/addGameToPlatform/${platformId}/${gameId}`;
    return this.http.post<Game>(url, game);
  }

  updateGame(game: Game): Observable<void> {
    const url = `${this.baseUrl}/game/${game.gameId}`;
    return this.http.put<void>(url, game);
  }

  createGame(game: Game): Observable<Game> {
    const url = `${this.baseUrl}/game`;
    return this.http.post<Game>(url, game);
  }

  deleteGame(gameId: String): Observable<void> {
    const url = `${this.baseUrl}/game/${gameId}`;
    return this.http.delete<void>(url);
  }

  remove(platformId: String, gameId: String): Observable<void> {
    const url = `${this.baseUrl}/game/removeGameAtPlatform/${platformId}/${gameId}`;
    return this.http.delete<void>(url);
  }

  message(str: String): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000,
    });
  }
}
