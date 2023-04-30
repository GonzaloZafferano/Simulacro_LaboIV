import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas/peliculas.service';
import { Pelicula} from '../../models/Pelicula';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  peliculaSeleccionada: Pelicula;
  constructor(private toastr: ToastrService) { }

  obtenerPeliculaSeleccionada(pelicula: Pelicula) {
    this.peliculaSeleccionada = pelicula;
    // const options = { 
    //   toastClass : 'toast-custom ',
    //   positionClass: 'toast-top-full-width', //CON ESTA CLASE SE PUEDEN STACKEAR LOS TOASTS.
    //   progressBar: true,
    //   timeOut: 3000,
    //   extendedTimeOut: 1000
    // };
    // this.toastr.success('Toast exitoso!', 'titulo',options);
  }
/*
  peliculas: Pelicula[] = [
    {
      id: 0,
      nombre: "Peli uno",
      tipoPelicula: TipoPelicula.amor,
      fechaDeEstreno: new Date("2022-11-23"),
      cantidadPublico: 102,
      rutaFoto: "rutadefoto",
    },
    {
      id: 1,
      nombre: "Peli dos",
      tipoPelicula: TipoPelicula.comedia,
      fechaDeEstreno: new Date("2023-11-30"),
      cantidadPublico: 99,
      rutaFoto: "rutadefoto2",
    }
  ];
  */
}
