import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Gif, SearchGifsResponse} from "../interfaces/interfaces-gifs";

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private API_KEY: string = 'mTe1eTIkGffodzp5kVF7HrUAQAhoPOp6';
  private BASE_URL: string = 'https://api.giphy.com/v1/gifs';
  private LIMIT: string = '10';

  private _record: string[] = [];
  public results: Gif[] = [];

  constructor(private http: HttpClient) {
    if (localStorage.getItem('historial') && localStorage.getItem('resultados')) {
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
    const httpParams = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('limit', this.LIMIT)
      .set('q', query);
    this.http.get<SearchGifsResponse>(`${this.BASE_URL}/search`, {params: httpParams})
      .subscribe((response) => {
        this.results = response.data;
        localStorage.setItem('resultados', JSON.stringify(this.results));
      });
  }

}
