import { Component } from '@angular/core';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent {
  public paisSeleccionado : any ;

  tablaPaisesHandler(pais: any) {
    if (pais != '') {
      this.paisSeleccionado = pais;  
    }
  }
}
