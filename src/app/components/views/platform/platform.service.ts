import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Platform } from "./platform.model";

@Injectable({
  providedIn: "root",
})
export class PlatformService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAll(): Observable<Platform[]> {
    const url = `${this.baseUrl}/platform`;
    return this.http.get<Platform[]>(url);
  }

  findById(platformId: String): Observable<Platform> {
    const url = `${this.baseUrl}/platform/${platformId}`;
    return this.http.get<Platform>(url);
  }

  createPlatform(platform: Platform): Observable<Platform> {
    const url = `${this.baseUrl}/platform`;
    return this.http.post<Platform>(url, platform);
  }

  updatePlatform(platform: Platform): Observable<void> {
    const url = `${this.baseUrl}/platform/${platform.platformId}`;
    return this.http.put<void>(url, platform);
  }

  deletePlatform(platformId: String): Observable<void> {
    const url = `${this.baseUrl}/platform/${platformId}`;
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
