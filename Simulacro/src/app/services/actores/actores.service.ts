import { Injectable } from '@angular/core';
import { Actor } from 'src/app/models/Actor';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { FirestoreDBService } from '../firestore-db/firestore-db.service';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  nombreLista: string;
  constructor(private localStorage: LocalStorageService, private firestoreDB: FirestoreDBService) {
    this.nombreLista = 'actores';
  }

  cargarActoraDB(actor: Actor) {
    return this.firestoreDB.guardarObjeto(this.nombreLista, {... actor});
  }

  obtenerListaDeActoresDB() {
    return this.firestoreDB.traerListaDeObjetos(this.nombreLista);
  }

  obtenerListadoDeActoresObservableDB() {
    return this.firestoreDB.traerListaDeObjetosConObservable(this.nombreLista);
  }

  modificarPeliculaDB(actor: Actor) {
    return this.firestoreDB.modificarObjeto(this.nombreLista, actor);
  }

  eliminarActorDB(id: string) {
    return this.firestoreDB.eliminarObjeto(this.nombreLista, id);
  }

  
  obtenerFechaString(actor: Actor, aaaaMMdd: boolean = false) {
    let fecha = actor.fechaNacimiento.toDate();// new Date(pelicula.fechaDeEstreno);
  
    let dia = fecha.getDate() + 1;
    let mes = fecha.getMonth() + 1;
    let anio = fecha.getFullYear();

    let cadenaDia = dia < 10 ? '0' + dia.toString() : dia.toString();
    let cadenaMes = mes < 10 ? '0' + mes.toString() : mes.toString();

    if (aaaaMMdd)
      return anio.toString() + '-' + cadenaMes + '-' + cadenaDia;

    return cadenaDia + '-' + cadenaMes + '-' + anio.toString();
  }
}
