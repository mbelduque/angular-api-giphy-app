import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import {SearchResultsComponent} from './search-results/search-results.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class GifsModule {
}
