import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { IResponseAPI } from "../interfaces/IResponseApi";

@Injectable({
  providedIn: 'root'
})

export class RickAndMortyService {

  private readonly API_URL = environment.api;

  constructor(private http: HttpClient) {}

  getCharacters():Observable<IResponseAPI> {
    return this.http.get<IResponseAPI>(this.API_URL);
  }
}
