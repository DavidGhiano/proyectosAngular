import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from '../../service/heroes.service'

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes:Heroe[] = []
  termino:string = ""; 

  constructor(
    private heroesService:HeroesService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino']
      this.heroes = this.heroesService.buscarHeroes(params['termino']);
    })
   }

  ngOnInit(): void {
  }

  verHeroe(idx:number){
    
    this.router.navigate( ['/heroe', idx] );
  }

}
