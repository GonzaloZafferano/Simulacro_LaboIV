import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Actor } from 'src/app/models/Actor';
import { ActoresService } from 'src/app/services/actores/actores.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent {
  constructor(private actorService: ActoresService) { }
  @Output() OnActorSeleccionado = new EventEmitter<Actor>();
  @Input() estilos: any;
  actores: any[];
  async ngOnInit() {
    let actores = await this.actorService.obtenerListaDeActoresDB();
    this.actores = actores.sort((x,y)=>{
      if (x['nombre'].toLowerCase() < y['nombre'].toLowerCase()) 
        return -1;        
      if (x['nombre'].toLowerCase() > y['nombre'].toLowerCase()) 
        return 1;        
      return 0;
    }); 
  }

  actorSeleccionado(actor: Actor) {
    this.OnActorSeleccionado.emit(actor);
  }
}
