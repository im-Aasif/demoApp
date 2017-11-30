import { Injectable } from '@angular/core';

@Injectable()
export class MovieslistService {
  listItems: any[] = ['m1', 'm2', 'm3', 'm4'];
  constructor() { }
  getMovies() {
    return this.listItems;
  }
}
