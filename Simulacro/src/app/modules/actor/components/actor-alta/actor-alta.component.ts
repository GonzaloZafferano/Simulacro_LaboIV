import { Component, Input } from '@angular/core';
import { Actor } from 'src/app/models/Actor';
import { Pelicula } from 'src/app/models/Pelicula';
import { ActoresService } from 'src/app/services/actores/actores.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent {
  //Campos de Actor.
  id: string = '';
  nombre: string = ''; 
  fechaNacimiento: string = '';
  cantidadPeliculas: number = 0;

  //Validaciones de actor.
  mensajeNombre: string = '';
  mensajePais: string = '';
  mensajeFechaNacimiento: string = '';
  mensajeCantidadPeliculas: string = '';
  guardando: boolean = false;
  @Input() pais :any; 

  constructor(private actorService: ActoresService) {
  }

  guardar() {
    let errorEnDatos = this.validarInputs();
    if (!errorEnDatos) {
      //FIRESTORE
      let actor = new Actor();
      actor.nombre = this.nombre;      
      actor.pais = this.pais;
      actor.fechaNacimiento = new Date(this.fechaNacimiento);
      actor.cantidadPeliculas = Number(this.cantidadPeliculas);

      this.guardando = true;

      this.actorService.cargarActoraDB(actor)
        .then(x => {
          Swal.fire({
            title: 'Alta exitosa!',
            text: `Se ha guardado el actor '${actor.nombre}' en la base de datos.`,
            icon: 'success',
            timer: 0,
            confirmButtonText: 'Aceptar'
          });
          this.limpiarFormulario();
          this.guardando = false;

        })
        .catch(err => {
          console.log(err);
          Swal.fire({
            title: 'Ha ocurrido un error!',
            text: `Ha ocurrido un error al intentar guardar: '${err}'`,
            icon: 'error',
            timer: 0,
            confirmButtonText: 'Aceptar'
          });
          this.guardando = false;
        })
    }
  }

  inputChange(event: any = null) {
    if (this.nombre != '')
      this.mensajeNombre = "";

    if (this.pais != null && this.pais != undefined)
      this.mensajePais = "";

    if (this.cantidadPeliculas != null && this.cantidadPeliculas >= 1)
      this.mensajeCantidadPeliculas = "";

    if (this.fechaNacimiento != '')
      this.mensajeFechaNacimiento = "";
  }

  validarInputs(event: any = null) {
    let errorEnDatos = false;

    if (this.nombre == '') {
      this.mensajeNombre = "Debe ingresar un nombre para el actor.";
      errorEnDatos = true;
    }

    if (this.pais == null || this.pais == undefined) {
      this.mensajePais = "Debe ingresar una nacionalidad para el actor.";
      errorEnDatos = true;
    }

    if (this.cantidadPeliculas == null || this.cantidadPeliculas < 1) {
      this.mensajeCantidadPeliculas = "Debe ingresar una cantidad valida para la cantidad de películas.";
      errorEnDatos = true;
    }

    if (this.fechaNacimiento == '') {
      this.mensajeFechaNacimiento = "Debe ingresar una fecha de nacimiento.";
      errorEnDatos = true;
    }

    return errorEnDatos;
  }

  limpiarMensajes() {
    this.mensajeNombre = '';
    this.mensajeFechaNacimiento = '';
    this.mensajeCantidadPeliculas = '';
    this.mensajePais = '';
  }

  limpiarInputs() {
    this.nombre = '';
    this.fechaNacimiento = '';
    this.cantidadPeliculas = 0;
    this.pais = undefined;
  }

  limpiarFormulario() {
    this.limpiarInputs();
    this.limpiarMensajes();
  }
}
