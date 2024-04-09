import {Component, Input, OnInit} from '@angular/core';
import {BackendService} from "../../../services/backend.service";
import {Character} from "../../../interfaces/character";
import {Paginator} from "../../../interfaces/paginator";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  characters: Character[] = [];
  @Input() view!: "desktop" | "mobile"

  constructor(private backend:BackendService, private router:Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getListCharacter();
  }

  getListCharacter(){
    this.backend.getCharacter().subscribe((resp: Paginator) => {
      this.characters = resp.results;
    })
  }

  selectCharacter(character: Character){
    if (this.view == 'mobile') {
      this.mobileCharacter(character)
    } else {
      this.desktopCharacter(character)
      this.backend.setCharacterSelect(character);
      this.backend.openDialog();
    }
  }

  mobileCharacter(character: Character){
    this.router.navigateByUrl('/mobile/character').then(res => {
      this.desktopCharacter(character)
    });

  }

  desktopCharacter(character:Character){
    const query = {
      id: character.id
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: query,
      queryParamsHandling: 'merge'
    })

  }
}
