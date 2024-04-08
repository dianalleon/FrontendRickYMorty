import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharacterComponent} from "./character/character.component";
import {DetailsCharacterComponent} from "./details-character/details-character.component";
import {ListComponent} from "./list/list.component";
import {MaterialModule} from "../../material/material.module";

@NgModule({
  declarations: [
    CharacterComponent,
    DetailsCharacterComponent,
    ListComponent
  ],
  exports: [
    ListComponent,
    CharacterComponent,
    DetailsCharacterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
