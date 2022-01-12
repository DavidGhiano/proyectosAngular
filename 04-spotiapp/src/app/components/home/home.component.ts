import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  mensajeError:string = "";

  loading: boolean;
  error: boolean =false;

  constructor(
    private spotify: SpotifyService
  ){ 
    this.loading = true;
    this.spotify.getNewRelease()
        .subscribe( (data:any) => { 
            this.nuevasCanciones = data; 
            this.loading = false;
          }, ( errorServicio )=>{
            this.loading = false;
            this.error = true;
            this.mensajeError = errorServicio.error.error.message ;
          });
  }

  ngOnInit(): void {
  }

}
