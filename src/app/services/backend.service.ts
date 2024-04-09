import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Paginator} from "../interfaces/paginator";
import {Character} from "../interfaces/character";
import {
  DetailsCharacterDesktopComponent
} from "../platform/desktop/details-character-desktop/details-character-desktop.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private character: BehaviorSubject<Character | null> = new BehaviorSubject<Character | null>(null)
  private apiRickMorty:string = environment.urlRick;

  public character$: Observable<Character | null> = this.character.asObservable();

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  getCharacter(): Observable<Paginator>{
    return this.http.get<Paginator>(this.apiRickMorty + 'api/character')
  }

  setCharacterSelect(character: Character){
    this.character.next(character)
  }

  openDialog(){
    this.dialog.open(DetailsCharacterDesktopComponent, {
      width: '250px'
    })
  }
}
