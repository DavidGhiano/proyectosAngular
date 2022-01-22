import { Component, Input, ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent {
  @ViewChild( IonList ) lista: IonList;
  @Input() terminada = true;

  constructor(public deseosService: DeseosService,
              private router: Router,
              private alertCtrl: AlertController ) { }

  listaSeleccionada( lista: Lista ){
    if( this.terminada ){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${ lista.id }`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ lista.id }`);
    }
  }

  async editar( lista: Lista ){

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Editar nombre de la Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: lista.titulo
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancer',
          handler: () => {
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Editar',
          handler: ( data ) => {
            if( data.titulo.length === 0 ){
              return;
            }

            lista.titulo = data.titulo;
            this.deseosService.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();
  }

  borrarLista( lista: Lista ){
    this.deseosService.borrarLista( lista );
  }


}
