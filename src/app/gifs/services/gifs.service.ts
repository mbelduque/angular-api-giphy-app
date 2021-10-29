import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private api_key = 'mTe1eTIkGffodzp5kVF7HrUAQAhoPOp6';

  private _record: string[] = [];

  constructor() {
  }

  get record(): string[] {
    return [...this._record];
  }

  searchGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase();
    // si el arreglo no tiene valores repetidos
    if (!this._record.includes(query)) {
      // guarda el nuevo valor en el arreglo
      this._record.unshift(query);
      // almacena hasta 10 elementos solamente
      this._record = this._record.splice(0, 10);
    }
    console.log(this._record);
  }

}
