import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Paginator} from "../interfaces/paginator";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private apiRickMorty = environment.urlRick;

  constructor(private http: HttpClient) { }

  getCharacter(): Observable<Paginator>{
    return this.http.get<Paginator>(this.apiRickMorty + 'api/character')
  }


}
