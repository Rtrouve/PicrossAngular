import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  public API = '//picross-server.herokuapp.com/grid';
  public nbLvl: number;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.API);
  }

  get(id: number) {
    return this.http.get(this.API + '/' + id);
  }

  save(grid: any): Observable<any> {
    let result: Observable<any>;
    if (grid.href) {
      result = this.http.put(grid.href, grid);
    } else {
      result = this.http.post(this.API, grid);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
