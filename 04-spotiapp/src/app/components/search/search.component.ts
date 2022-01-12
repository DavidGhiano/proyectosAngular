import { Component, Input} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
  
  loading:boolean;
  artistas:any[] = [];

  constructor(
    private spotify:SpotifyService
  ) { 
    this.loading = false;
  }


  
  buscar(termino:string){
    this.loading = true;
    this.spotify.getArtistas( termino )
        .subscribe( (data:any) => { 
          this.artistas = data;
          this.loading = false;
        });
  }
}
