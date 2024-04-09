import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Paginator} from "../interfaces/paginator";
import {Character} from "../interfaces/character";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private character: BehaviorSubject<Character | null> = new BehaviorSubject<Character | null>(null)
  private apiRickMorty:string = environment.urlRick;

  public character$: Observable<Character | null> = this.character.asObservable();

  constructor(private http: HttpClient) { }

  getCharacter(): Observable<Paginator>{
    return this.http.get<Paginator>(this.apiRickMorty + 'api/character')
  }

  setCharacterSelect(character: Character){
    this.character.next(character)
  }
}
