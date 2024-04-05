import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCharacterMobileComponent} from "./list-character-mobile/list-character-mobile.component";
import {CharacterMobileComponent} from "./character-mobile/character-mobile.component";
import {DetailsCharacterMobileComponent} from "./details-character-mobile/details-character-mobile.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path:'list', component: ListCharacterMobileComponent },
      { path: 'character', component: CharacterMobileComponent },
      { path: 'details/:id', component: DetailsCharacterMobileComponent },
      { path: '', redirectTo: 'list'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
