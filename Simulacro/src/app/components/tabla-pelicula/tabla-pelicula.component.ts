import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../models/Pelicula';
import { PeliculasService } from '../../services/peliculas/peliculas.service';
import { FormateoService } from 'src/app/services/formateo/formateo.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})

export class TablaPeliculaComponent implements OnInit {
  @Output() OnPeliculaSeleccionada = new EventEmitter<Pelicula>();
  filaSeleccionada: any;
  listado: any[] = [];
  spinner: boolean = false;
  suscripcion: any;
  constructor(private peliculasService: PeliculasService, private formateo: FormateoService) { }

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  async obtenerPeliculas() {
    this.spinner = true;

    if (this.suscripcion)
      this.suscripcion.unsubscribe();

    this.suscripcion = (await this.peliculasService.obtenerListadoDePeliculasObservableDB()).subscribe(x =>{  
      this.listado = x.sort((x, y) => {
        if (x['nombre'].toLowerCase() < y['nombre'].toLowerCase())
          return -1;
        if (x['nombre'].toLowerCase() > y['nombre'].toLowerCase())
          return 1;
        return 0;
      });
      this.spinner = false;
    });    
  }

  obtenerFechaString(pelicula: Pelicula) {
    return this.formateo.obtenerFechaString(pelicula.fechaDeEstreno);
  }

  obtenerTipoPeliculaString(pelicula: Pelicula) {
    return this.formateo.obtenerTipoPeliculaString(pelicula);
  }

  seleccionDeFila(itemSeleccionado: Pelicula) {
    this.filaSeleccionada = itemSeleccionado;
    this.OnPeliculaSeleccionada.emit(itemSeleccionado);
  }
}
