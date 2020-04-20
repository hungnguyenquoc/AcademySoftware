import { Component, OnInit } from '@angular/core';
import { Hero } from '../_models/hero';
// import { HEROES } from '../_models/mock-heros';
import { HeroService } from '../_services/hero.service';
import { HEROES } from '../_models/mock-heros';
import { MessageService } from '../_services/message.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  // hero = 'Windstorm';
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  selectedHero: Hero;
  heroes: Hero[];
  constructor(private heroService: HeroService, private messageService: MessageService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`Hero service: Selected hero id=${hero.id}`);
  }
  getHeroes(): void {
    // this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }
}
