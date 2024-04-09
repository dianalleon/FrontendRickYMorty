import {Component, Input, OnInit} from '@angular/core';
import {BackendService} from "../../../services/backend.service";
import {Character} from "../../../interfaces/character";
import {Paginator} from "../../../interfaces/paginator";
import {
  DetailsCharacterDesktopComponent
} from "../../desktop/details-character-desktop/details-character-desktop.component";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.sass']
})
export class CharacterComponent implements OnInit {
  @Input() view!: "desktop" | "mobile"

  id!: string | null;
  characters: Character[] = [];

  constructor(private backend: BackendService, public dialog: MatDialog,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id']
    })
    this.getCharacter();
  }

  getCharacter() {
    this.backend.getCharacter().subscribe((result: Paginator) => this.characters = result.results)
  }

  openDialog(character: Character) {
    this.backend.setCharacterSelect(character);
    if (this.view == 'mobile') {
      this.mobileCharacter(character)
    } else {
      this.dialog.open(DetailsCharacterDesktopComponent, {
        width: '250px'
      })
    }
  }

  mobileCharacter(character: Character) {
    this.router.navigateByUrl(`/mobile/details/${character.id}`)
  }
}
