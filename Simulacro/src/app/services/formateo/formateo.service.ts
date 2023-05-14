import { Injectable } from '@angular/core';
import { Pelicula } from 'src/app/models/Pelicula';
import { TipoPelicula } from 'src/app/models/TipoPelicula';

@Injectable({
  providedIn: 'root'
})
export class FormateoService {

  constructor() { }

  obtenerFechaString(fecha: any, aaaaMMdd: boolean = false) {
    if(fecha){
      let fechaDate = fecha.toDate();// new Date(fecha);
    
      let dia = fechaDate.getDate() + 1;
      let mes = fechaDate.getMonth() + 1;
      let anio = fechaDate.getFullYear();
  
      let cadenaDia = dia < 10 ? '0' + dia.toString() : dia.toString();
      let cadenaMes = mes < 10 ? '0' + mes.toString() : mes.toString();
  
      if (aaaaMMdd)
        return anio.toString() + '-' + cadenaMes + '-' + cadenaDia;
  
      return cadenaDia + '-' + cadenaMes + '-' + anio.toString();
    }
    return '';
  }

  obtenerTipoPeliculaString(pelicula: Pelicula) {
    return TipoPelicula[pelicula.tipoPelicula];
  }
}
