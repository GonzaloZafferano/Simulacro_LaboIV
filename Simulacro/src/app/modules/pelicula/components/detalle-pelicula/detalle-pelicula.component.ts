import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pelicula } from 'src/app/models/Pelicula';
import { PeliculasService } from 'src/app/services/peliculas/peliculas.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent {
  @Input() pelicula: Pelicula;
  fechaEstreno: string;
  tipoPelicula: string;
  id: string;
  nombre: string;
  cantidadDePublico: string;
  rutaFoto: string;

  constructor(private peliculaService: PeliculasService) { 
    this.limpiar();
  }

  ngOnChanges() {
    if (this.pelicula) {
      this.fechaEstreno = this.peliculaService.obtenerFechaString(this.pelicula, true);
      this.tipoPelicula = this.peliculaService.obtenerTipoPeliculaString(this.pelicula);
      this.id = this.pelicula.id.toString();
      this.nombre = this.pelicula.nombre;
      this.cantidadDePublico = this.pelicula.cantidadPublico.toString();
      this.rutaFoto = this.pelicula.rutaFoto;
    }
  }

  limpiar() {
    this.rutaFoto = '';
    this.nombre = '';
    this.cantidadDePublico = '';
    this.tipoPelicula = '';
    this.fechaEstreno = '';
    this.id = '';
  }
}
