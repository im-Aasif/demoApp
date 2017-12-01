import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HEROES } from '../models/mock-heroes';
import { Hero } from '../models/hero';
import { MessageService } from './message.service';



@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: heroes fetched');
    return of(HEROES);
  }

  getHero(id: number) {
    this.messageService.add(`HeroService: hero fetched for id: ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
