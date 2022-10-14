import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from './game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll():Observable<Game[]> {
    const url = '${this.baseUrl}/game'
    return this.http.get<Game[]>(url)
  }
}
