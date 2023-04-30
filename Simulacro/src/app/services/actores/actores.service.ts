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
  // obtenerActores() {
  //   let actores = this.localStorage.obtenerItem('actores');
  //   return actores != null && actores instanceof Array ? actores : [];
  // }

  // cargarActores(actores: Actor[]) {
  //   this.localStorage.cargarItem('actores', actores);
  // }

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
}
