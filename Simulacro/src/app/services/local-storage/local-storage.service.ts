import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  cargarItem(clave: string, item: any) {
    localStorage.setItem(clave, JSON.stringify(item));
  }

  obtenerItem(clave: string) {
    let item = localStorage.getItem(clave);
    return item != null ? JSON.parse(item) : null;    
  }

  existeItem(clave: string) {
    return this.obtenerItem(clave) != null;
  }
}
