import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ListCharacterComponent } from './platform/list-character/list-character.component';
import { ListComponent } from './platform/components/list/list.component';
import { CharacterComponent } from './platform/components/character/character.component';
import { DetailsCharacterComponent } from './platform/components/details-character/details-character.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCharacterComponent,
    ListComponent,
    CharacterComponent,
    DetailsCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
