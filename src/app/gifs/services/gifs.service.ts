import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Gif, SearchGifsResponse} from "../interfaces/interfaces-gifs";

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private API_KEY = 'mTe1eTIkGffodzp5kVF7HrUAQAhoPOp6';
  private BASE_URL = 'https://api.giphy.com/v1/gifs/'

  private _record: string[] = [];
  public results: Gif[] = [];

  constructor(private http: HttpClient) {
    if (localStorage.getItem('historial') && localStorage.getItem('resultados') ) {
      this._record = JSON.parse(localStorage.getItem('historial')!)
      this.results = JSON.parse(localStorage.getItem('resultados')!)
    }
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
      localStorage.setItem('historial', JSON.stringify(this._record));
    }
    this.http.get<SearchGifsResponse>(`${this.BASE_URL}search?api_key=${this.API_KEY}&q=${query}&limit=10`)
      .subscribe((response) => {
        this.results = response.data;
        localStorage.setItem('resultados', JSON.stringify(this.results));
        console.log(response.data);
      });
  }

}
