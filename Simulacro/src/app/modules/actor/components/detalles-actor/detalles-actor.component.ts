import { Component, Input } from '@angular/core';
import { Actor } from 'src/app/models/Actor';
import { FormateoService } from 'src/app/services/formateo/formateo.service';

@Component({
  selector: 'app-detalles-actor',
  templateUrl: './detalles-actor.component.html',
  styleUrls: ['./detalles-actor.component.css']
})
export class DetallesActorComponent {
  @Input() spinner: boolean = false;
  @Input() anchoSpinner: string;
  @Input() actor: Actor | undefined | null;

  constructor(private formateo: FormateoService) { }

  obtenerFechaString(fecha: any) {
    return this.formateo.obtenerFechaString(fecha);
  }
}
