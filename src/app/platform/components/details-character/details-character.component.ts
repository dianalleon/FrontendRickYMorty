import {Component, Input} from '@angular/core';
import {Character} from "../../../interfaces/character";

@Component({
  selector: 'app-details-character',
  templateUrl: './details-character.component.html',
  styleUrls: ['./details-character.component.sass']
})
export class DetailsCharacterComponent{

  @Input() detailsCharacterInfo!: Character

  constructor() { }
}
