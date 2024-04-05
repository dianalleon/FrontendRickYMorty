import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileRoutingModule } from './mobile-routing.module';
import {ListCharacterMobileComponent} from "./list-character-mobile/list-character-mobile.component";
import { DetailsCharacterMobileComponent } from './details-character-mobile/details-character-mobile.component';
import { CharacterMobileComponent } from './character-mobile/character-mobile.component';


@NgModule({
  declarations: [
    ListCharacterMobileComponent,
    DetailsCharacterMobileComponent,
    CharacterMobileComponent
  ],
  imports: [
    CommonModule,
    MobileRoutingModule
  ]
})
export class MobileModule { }
