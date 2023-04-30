import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula} from '../../models/Pelicula';
import { PeliculasService } from '../../services/peliculas/peliculas.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})

export class TablaPeliculaComponent implements OnInit {
  @Output() OnPeliculaSeleccionada = new EventEmitter<Pelicula>();
  filaSeleccionada: any;
  listado: any[] = [];
  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  async obtenerPeliculas() {
    //this.listado = this.peliculasService.obtenerPeliculas();
    this.listado = await this.peliculasService.obtenerListaDePeliculasDB();
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
