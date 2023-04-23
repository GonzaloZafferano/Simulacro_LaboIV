import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula, TipoPelicula } from '../models/Pelicula';
import { PeliculasService } from '../services/peliculas/peliculas.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})

export class TablaPeliculaComponent implements OnInit {
  @Output() OnPeliculaSeleccionada = new EventEmitter<Pelicula>();
  filaSeleccionada: any;
  listado: Pelicula[] = [];
  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  obtenerPeliculas() {
    this.listado = this.peliculasService.obtenerPeliculas();
  }

  obtenerFechaString(pelicula: Pelicula) {
    return this.peliculasService.obtenerFechaString(pelicula);
  }

  obtenerTipoPeliculaString(pelicula: Pelicula) {
    return this.peliculasService.obtenerTipoPeliculaString(pelicula);
  }

  seleccionDeFila(itemSeleccionado: Pelicula) {
    this.filaSeleccionada = itemSeleccionado;
    this.OnPeliculaSeleccionada.emit(itemSeleccionado);
  }
}
