import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pelicula } from 'src/app/models/Pelicula';
import { FormateoService } from 'src/app/services/formateo/formateo.service';
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
  nombreActor: string;

  constructor(private peliculaService: PeliculasService, private formateo : FormateoService) { 
    this.limpiar();
  }

  ngOnChanges() {
    if (this.pelicula) {
      this.fechaEstreno = this.formateo.obtenerFechaString(this.pelicula.fechaDeEstreno, true);
      this.tipoPelicula = this.formateo.obtenerTipoPeliculaString(this.pelicula);
      this.id = this.pelicula.id.toString();
      this.nombre = this.pelicula.nombre;
      this.cantidadDePublico = this.pelicula.cantidadPublico.toString();
      this.rutaFoto = this.pelicula.rutaFoto;
      this.nombreActor = this.pelicula.actor != undefined ? this.pelicula.actor.nombre : '';
    }
  }

  limpiar() {
    this.rutaFoto = '';
    this.nombre = '';
    this.cantidadDePublico = '';
    this.tipoPelicula = '';
    this.fechaEstreno = '';
    this.id = '';
    this.nombreActor = '';
  }

  borrar(){
    this.peliculaService.eliminarPeliculaDB(this.pelicula.id);
    this.limpiar();
  }

  modificar(){
    let pelicula = new Pelicula();
    pelicula.id = this.id;
    pelicula.actor = this.pelicula.actor;
    pelicula.cantidadPublico = parseInt(this.cantidadDePublico);
    pelicula.nombre = this.nombre;
    pelicula.rutaFoto = this.rutaFoto;
    pelicula.tipoPelicula = this.pelicula.tipoPelicula;
    pelicula.fechaDeEstreno = this.pelicula.fechaDeEstreno;

    this.peliculaService.modificarPeliculaDB(pelicula);
    this.limpiar();
  }
}
