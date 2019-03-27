import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Grille } from './grille';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  constructor(private http: HttpClient) { }

  getNiveau(num: number): Observable<Grille> {
    return this.http.get<Grille>('asset/niveau'+num+'.json');
  }

}
