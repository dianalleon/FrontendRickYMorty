import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsCharacterDesktopComponent } from './details-character-desktop/details-character-desktop.component';
import { DesktopComponent } from './desktop.component';

@NgModule({
  declarations: [
    DetailsCharacterDesktopComponent,
    DesktopComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DesktopModule { }
