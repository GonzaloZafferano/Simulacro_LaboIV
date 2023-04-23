import { Component } from '@angular/core';
import { PeliculasService } from '../services/peliculas/peliculas.service';
import { Pelicula, TipoPelicula } from '../models/Pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  peliculaSeleccionada: Pelicula;
  constructor() { }

  obtenerPeliculaSeleccionada(pelicula: Pelicula) {
    this.peliculaSeleccionada = pelicula;
  }
/*
  peliculas: Pelicula[] = [
    {
      id: 0,
      nombre: "Peli uno",
      tipoPelicula: TipoPelicula.amor,
      fechaDeEstreno: new Date("2022-11-23"),
      cantidadPublico: 102,
      rutaFoto: "rutadefoto",
    },
    {
      id: 1,
      nombre: "Peli dos",
      tipoPelicula: TipoPelicula.comedia,
      fechaDeEstreno: new Date("2023-11-30"),
      cantidadPublico: 99,
      rutaFoto: "rutadefoto2",
    }
  ];
  */
}
