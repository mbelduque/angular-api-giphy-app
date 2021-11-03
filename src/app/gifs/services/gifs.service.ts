import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private API_KEY = 'mTe1eTIkGffodzp5kVF7HrUAQAhoPOp6';
  private BASE_URL = 'https://api.giphy.com/v1/gifs/'

  private _record: string[] = [];

  constructor(private http: HttpClient) {
  }

  get record(): string[] {
    return [...this._record];
  }

  search(query: string = '') {
    query = query.trim().toLocaleLowerCase();
    // si el arreglo no tiene valores repetidos
    if (!this._record.includes(query)) {
      // guarda el nuevo valor en el arreglo
      this._record.unshift(query);
      // almacena hasta 10 elementos solamente
      this._record = this._record.splice(0, 10);
    }
    this.http.get(`${this.BASE_URL}search?api_key=${this.API_KEY}&q=${query}&limit=10`)
      .subscribe((response: any) => {
        console.log(response.data);
      });
  }

}
