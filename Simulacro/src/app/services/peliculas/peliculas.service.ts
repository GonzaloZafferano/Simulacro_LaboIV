import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Pelicula } from 'src/app/models/Pelicula';
import { TipoPelicula } from 'src/app/models/TipoPelicula';
import { FirestoreDBService } from '../firestore-db/firestore-db.service';

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {
  nombreLista: string;
  constructor(private localStorage: LocalStorageService, private firestoreDB: FirestoreDBService) {
    this.nombreLista = 'peliculas';
  }

  obtenerPeliculas() {
    let peliculas = this.localStorage.obtenerItem('peliculas');
    return peliculas != null && peliculas instanceof Array ? peliculas : [];
  }

  cargarPeliculas(peliculas: Pelicula[]) {
    this.localStorage.cargarItem('peliculas', peliculas);
  }

  cargarPeliculaDB(pelicula: Pelicula) {
    return this.firestoreDB.guardarObjeto(this.nombreLista, {... pelicula});
  }

  obtenerListaDePeliculasDB() {
    return this.firestoreDB.traerListaDeObjetos(this.nombreLista);
  }

  obtenerListadoDePeliculasObservableDB() {
    return this.firestoreDB.traerListaDeObjetosConObservable(this.nombreLista);
  }

  modificarPeliculaDB(pelicula: Pelicula) {
    return this.firestoreDB.modificarObjeto(this.nombreLista, pelicula);
  }

  eliminarPeliculaDB(id: string) {
    return this.firestoreDB.eliminarObjeto(this.nombreLista, id);
  }

  obtenerFechaString(pelicula: Pelicula, aaaaMMdd: boolean = false) {
    let fecha = pelicula.fechaDeEstreno.toDate();// new Date(pelicula.fechaDeEstreno);
  
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
