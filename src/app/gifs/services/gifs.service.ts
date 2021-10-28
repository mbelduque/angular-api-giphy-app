import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _record: string[] = [];

  constructor() {
  }

  get record(): string[] {
    return [...this._record];
  }

  searchGifs(query: string) {
    this._record.unshift(query);
    console.log(this._record);
  }

}
