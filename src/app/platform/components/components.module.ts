import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharacterComponent} from "./character/character.component";
import {DetailsCharacterComponent} from "./details-character/details-character.component";
import {ListComponent} from "./list/list.component";

@NgModule({
  declarations: [
    CharacterComponent,
    DetailsCharacterComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
