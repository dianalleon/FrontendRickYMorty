import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../../services/backend.service";
import {Character} from "../../../interfaces/character";
import {Paginator} from "../../../interfaces/paginator";
import {
  DetailsCharacterDesktopComponent
} from "../../desktop/details-character-desktop/details-character-desktop.component";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {query} from "@angular/animations";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.sass']
})
export class CharacterComponent implements OnInit {

  id!:string | null;

  characters: Character[] = [];
  constructor(private backend: BackendService, public dialog:MatDialog,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id']
    })
    this.getCharacter();
  }

  getCharacter(){
    this.backend.getCharacter().subscribe( (result: Paginator) => this.characters = result.results)
  }

  openDialog(character: Character){
    this.dialog.open(DetailsCharacterDesktopComponent, {
      data: character
    })
  }
}
