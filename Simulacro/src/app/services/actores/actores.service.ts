import { Injectable } from '@angular/core';
import { Actor } from 'src/app/models/Actor';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  constructor(private localStorage: LocalStorageService) { }

  obtenerActores() {
    let actores = this.localStorage.obtenerItem('actores');
    return actores != null && actores instanceof Array ? actores : [];
  }

  cargarActores(actores: Actor[]) {
    this.localStorage.cargarItem('actores', actores);
  }
}
