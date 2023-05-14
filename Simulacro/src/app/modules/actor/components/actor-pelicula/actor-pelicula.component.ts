import { Component } from '@angular/core';
import { Actor } from 'src/app/models/Actor';
import { PeliculasDeActorComponent } from '../peliculas-de-actor/peliculas-de-actor.component';
import { PeliculasService } from 'src/app/services/peliculas/peliculas.service';
import { Pelicula } from 'src/app/models/Pelicula';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css'],
})
export class ActorPeliculaComponent {
  spinners: boolean = false;
  actor: Actor | undefined;
  pais: any;
  peliculas: Pelicula[];

  constructor(private peliculasService : PeliculasService){}

  async actorSeleccionado(actor: Actor) {
    this.spinners = true;

    //Paso el actor para los detalles de el mismo
    this.actor = actor;

    //Obtengo los nombres de las peliculas
    let peliculas = await this.peliculasService.obtenerListaDePeliculasDB();
    peliculas = peliculas.filter(x => x['actor'].id == actor.id);
    this.peliculas = peliculas as unknown as Pelicula[];

    //Detalles pais
    this.pais = actor.pais;

    this.spinners = false;
  }
}
