import {Component, Input, OnInit} from '@angular/core';
import {Character} from "../../../interfaces/character";
import {BackendService} from "../../../services/backend.service";

@Component({
  selector: 'app-details-character',
  templateUrl: './details-character.component.html',
  styleUrls: ['./details-character.component.sass']
})
export class DetailsCharacterComponent implements OnInit{

  detailsCharacter!: Character;

  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.backend.character$.subscribe(result => {
      if(result){
        this.detailsCharacter = result;
      }
    })
  }
}
