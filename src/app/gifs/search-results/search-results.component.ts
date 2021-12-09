import {Component, OnInit} from '@angular/core';

import {GifsService} from '../services/gifs.service';
import {Gif} from "../interfaces/interfaces-gifs";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private gifService: GifsService) {
  }

  ngOnInit(): void {
  }

  get results(): Gif[] {
    return this.gifService.results;
  }

}
