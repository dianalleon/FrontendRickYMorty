import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsCharacterDesktopComponent } from './details-character-desktop/details-character-desktop.component';
import { DesktopComponent } from './desktop.component';
import {MaterialModule} from "../../material/material.module";
import {ComponentsModule} from "../components/components.module";


@NgModule({
  declarations: [
    DetailsCharacterDesktopComponent,
    DesktopComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
  ]
})
export class DesktopModule { }
