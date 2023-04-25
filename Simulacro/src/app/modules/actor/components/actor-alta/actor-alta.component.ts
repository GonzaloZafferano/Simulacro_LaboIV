import { Component } from '@angular/core';
import { Actor } from 'src/app/models/Actor';
import { Pelicula } from 'src/app/models/Pelicula';
import { ActoresService } from 'src/app/services/actores/actores.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent { 
  constructor(private actoresService: ActoresService) {
  }

  cargar() {
    //obtengo los datos del formulario
    //valido
    //esta ok:

    let peliculas = this.actoresService.obtenerActores();
      // peliculas.push(xxxx);
   this.actoresService.cargarActores(peliculas);
  }

 
}
