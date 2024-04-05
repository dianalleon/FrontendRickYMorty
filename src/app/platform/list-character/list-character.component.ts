import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.sass']
})
export class ListCharacterComponent implements OnInit {

  constructor(private backend:BackendService) { }

  ngOnInit(): void {
    this.getListCharacter();
  }

  getListCharacter(){
    this.backend.getCharacter().subscribe(resp => console.log(resp))
  }

}
