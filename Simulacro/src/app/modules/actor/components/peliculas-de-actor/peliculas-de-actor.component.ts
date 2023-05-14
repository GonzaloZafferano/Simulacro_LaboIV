import { Component, Input } from '@angular/core';
import { Pelicula } from 'src/app/models/Pelicula';
import { PeliculasService } from 'src/app/services/peliculas/peliculas.service';

@Component({
  selector: 'app-peliculas-de-actor',
  templateUrl: './peliculas-de-actor.component.html',
  styleUrls: ['./peliculas-de-actor.component.css']
})
export class PeliculasDeActorComponent {
  constructor(private peliculasService: PeliculasService) { } 

  @Input() anchoSpinner: string = '';
  @Input() peliculas: Pelicula [];
  @Input() spinner : boolean = false; 
  @Input() estilos: any;

  ngOnInit() {                             
  
  }

  ngOnDestroy() {
   
  } 
}
