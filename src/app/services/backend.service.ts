import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Character} from "../interfaces/character";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private apiRickMorty = environment.urlRick;

  constructor(private http: HttpClient) { }

  getCharacter(): Observable<Character[]>{
    return this.http.get<Character[]>(this.apiRickMorty + 'api/character')
  }


}
