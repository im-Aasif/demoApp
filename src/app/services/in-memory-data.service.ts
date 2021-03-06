import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from '../models/hero';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      {
        id: 1,
        alias: 'The Flash',
        name: 'Barry Allen'
      },
      {
        id: 2,
        alias: 'Batman',
        name: 'Bruce Wayne'
      },
      {
        id: 3,
        alias: 'Spiderman',
        name: 'Peter Parker'
      },
      {
        id: 4,
        alias: 'Wolverine',
        name: 'James Howlett'
      },
      {
        id: 5,
        alias: 'Wonder Woman',
        name: 'Diana Prince'
      },
      {
        id: 6,
        alias: 'Superman',
        name: 'Clark Kent'
      },
      {
        id: 7,
        alias: 'The Hulk',
        name: 'Bruce Banner'
      },
      {
        id: 8,
        alias: 'Iron Man',
        name: 'Tony Stark'
      },
      {
        id: 9,
        alias: 'Deathstroke',
        name: 'Slade Wilson'
      },
      {
        id: 10,
        alias: 'Deadpool',
        name: 'Wade Wilson'
      }
    ];
    const random: string[] =[
      "RANDOM",
      "123445567",
      "qwertyuii"
    ]
    return {heroes, random};
  }
}
