import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = { };

  constructor(
    private activatedRoute:ActivatedRoute,
    private heroesServic:HeroesService
  ) { 
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroesServic.getHeroe(params['id']);
    })
  }

}
