import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Pelicula} from 'src/app/models/Pelicula';
import { TipoPelicula } from 'src/app/models/TipoPelicula';

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {
  constructor(private localStorage: LocalStorageService) { }

  obtenerPeliculas() {
    let peliculas = this.localStorage.obtenerItem('peliculas');
    return peliculas != null && peliculas instanceof Array ? peliculas : [];
  }

  cargarPeliculas(peliculas: Pelicula[]) {
    this.localStorage.cargarItem('peliculas', peliculas);
  }

  obtenerFechaString(pelicula: Pelicula, aaaaMMdd: boolean = false) {
    let fecha = new Date(pelicula.fechaDeEstreno);
    let dia = fecha.getDate() + 1;
    let mes = fecha.getMonth() + 1;
    let anio = fecha.getFullYear();

    let cadenaDia = dia < 10 ? '0' + dia.toString() : dia.toString();
    let cadenaMes = mes < 10 ? '0' + mes.toString() : mes.toString();

    if (aaaaMMdd)
      return anio.toString() + '-' + cadenaMes + '-' + cadenaDia;

    return cadenaDia + '-' + cadenaMes + '-' + anio.toString();
  }

  obtenerTipoPeliculaString(pelicula: Pelicula) {
    return TipoPelicula[pelicula.tipoPelicula];
  }
}
