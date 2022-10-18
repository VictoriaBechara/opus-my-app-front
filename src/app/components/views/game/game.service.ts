import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from './game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Game[]> {
    const url = `${this.baseUrl}/game`
    return this.http.get<Game[]>(url)
  }

  createGame(game: Game): Observable<Game>{
    const url = `${this.baseUrl}/createGame`
    return this.http.post<Game>(url, game)
  }

  message(str: String): void{
    this._snack.open(`${str}`, 'OK',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
