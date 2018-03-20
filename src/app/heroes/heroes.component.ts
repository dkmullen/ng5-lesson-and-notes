import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // import the Hero class
import { HEROES } from '../mock-heroes'; // bring in the data (normally from a server)

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
 
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  // this is called by a click event in heroes.component.html
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
