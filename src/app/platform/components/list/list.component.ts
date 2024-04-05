import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../../services/backend.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  constructor(private backend:BackendService) { }

  ngOnInit(): void {
    this.getListCharacter();
  }

  getListCharacter(){
    this.backend.getCharacter().subscribe(resp => console.log(resp))
  }
}
