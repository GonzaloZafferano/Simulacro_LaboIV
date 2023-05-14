import { Component, EventEmitter, Output } from '@angular/core';
import { Actor } from 'src/app/models/Actor';
import { ActoresService } from 'src/app/services/actores/actores.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent {
  @Output() OnActorSeleccionado = new EventEmitter<Actor>();
  filaSeleccionada: any;
  listado: any[] = [];
  spinner : boolean = false;
  constructor(private actorService: ActoresService) { }

  ngOnInit(): void {    
    this.obtenerPeliculas();
  }

  async obtenerPeliculas() {
    this.spinner = true;    
    let peliculas = await this.actorService.obtenerListaDeActoresDB();

    this.listado = peliculas.sort((x,y)=>{
      if (x['nombre'].toLowerCase() < y['nombre'].toLowerCase()) 
        return -1;        
      if (x['nombre'].toLowerCase() > y['nombre'].toLowerCase()) 
        return 1;        
      return 0;
    }); 

    this.spinner = false;
  }

  obtenerFechaString(actor: Actor) {
    return this.actorService.obtenerFechaString(actor);
  }

  seleccionDeFila(itemSeleccionado: Actor) {
    this.filaSeleccionada = itemSeleccionado;
    this.OnActorSeleccionado.emit(itemSeleccionado);
  }
}
