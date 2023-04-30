import { Component } from '@angular/core';
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
  apellido: string = '';
  nacionalidad: string = '';
  fechaNacimiento: string = '';
  cantidadPeliculas: number = 0;

  //Validaciones de actor.
  mensajeNombre: string = '';
  mensajeApellido: string = '';
  mensajeNacionalidad: string = '';
  mensajeFechaNacimiento: string = '';
  mensajeCantidadPeliculas: string = '';
  guardando: boolean = false;

  //foto: string = '';
  //archivoDeFoto: File;
  //inputArchivo: any;
  //mensajeFoto: string = '';

  constructor(private actorService: ActoresService) {
  }

  guardar() {
    let errorEnDatos = this.validarInputs();
    if (!errorEnDatos) {

      //LOCAL STORAGE
      // let peliculas = this.peliculasService.obtenerPeliculas();

      // let ultimoId = peliculas.length > 0 ? Math.max(...peliculas.map(obj => obj.id)) : 0;

      // let pelicula = new Pelicula();
      // pelicula.id = ++ultimoId;
      // pelicula.nombre = this.nombre;
      // pelicula.tipoPelicula = Number(this.tipoPelicula);
      // pelicula.fechaDeEstreno = new Date(this.fechaEstreno);
      // pelicula.cantidadPublico = Number(this.cantidadDePublico);
      // pelicula.rutaFoto = this.foto;

      // peliculas.push(pelicula);
      // this.peliculasService.cargarPeliculas(peliculas);

      //FIRESTORE
      let actor = new Actor();
      actor.nombre = this.nombre;
      actor.apellido = this.apellido
      actor.nacionalidad = this.nacionalidad;
      actor.fechaNacimiento = new Date(this.fechaNacimiento);
      actor.cantidadPeliculas = Number(this.cantidadPeliculas);

      this.guardando = true;

      this.actorService.cargarActoraDB(actor)
        .then(x => {
          Swal.fire({
            title: 'Alta exitosa!',
            text: `Se ha guardado el actor '${actor.nombre} ${actor.apellido}' en la base de datos.`,
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

    if (this.apellido != '')
      this.mensajeApellido = "";

    if (this.nacionalidad != '')
      this.mensajeNacionalidad = "";

    if (this.cantidadPeliculas != null && this.cantidadPeliculas >= 1)
      this.mensajeCantidadPeliculas = "";

    if (this.fechaNacimiento != '')
      this.mensajeFechaNacimiento = "";

    // if (event != null && event.target.matches("[type=file]")) {
    //   this.inputArchivo = event.target;
    //   let hayError = this.validarImagen(event);
    //   if (!hayError) {
    //     this.obtenerUrlDeImagen(event);
    //   }
    //   else
    //     this.foto = '';
    // }

    // if (this.foto != '')
    //   this.mensajeFoto = '';
  }

  validarInputs(event: any = null) {
    let errorEnDatos = false;

    if (this.nombre == '') {
      this.mensajeNombre = "Debe ingresar un nombre para el actor.";
      errorEnDatos = true;
    }

    if (this.apellido == '') {
      this.mensajeApellido = "Debe ingresar un apellido para el actor.";
      errorEnDatos = true;
    }

    if (this.nacionalidad == '') {
      this.mensajeNacionalidad = "Debe ingresar una nacionalidad para el actor.";
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

    // if (this.mensajeFoto == '' && this.foto == '') {
    //   this.mensajeFoto = "Debe seleccionar un archivo para la foto.";
    //   errorEnDatos = true;
    // } else if (this.mensajeFoto != '')
    //   errorEnDatos = true;

    return errorEnDatos;
  }

  // validarImagen(event: any) {
  //   let errorConArchivo = false;
  //   var nombreArchivo = event.target.value;
  //   var indicePunto = nombreArchivo.lastIndexOf(".") + 1;
  //   var extension = nombreArchivo.substr(indicePunto, nombreArchivo.length).toLowerCase();
  //   if (extension != "jpg" && extension != "jpeg" && extension != "png") {
  //     this.mensajeFoto = "Solo se admiten archivos de tipo jpg, jpeg.";
  //     errorConArchivo = true;
  //   }
  //   return errorConArchivo;
  // }

  // obtenerUrlDeImagen(event: any) {
  //   let file = event.target.files[0];
  //   let reader = new FileReader();

  //   reader.onload = (e: any) => {     
  //     this.foto = e.target.result;
  //     this.mensajeFoto = '';
  //   };
  //   reader.readAsDataURL(file);
  // }

  limpiarMensajes() {
    this.mensajeNombre = '';
    this.mensajeApellido = '';
    this.mensajeFechaNacimiento = '';
    this.mensajeCantidadPeliculas = '';
    this.mensajeNacionalidad = '';
  }

  limpiarInputs() {
    this.nombre = '';
    this.apellido = '';
    this.fechaNacimiento = '';
    this.cantidadPeliculas = 0;
    this.nacionalidad = '';

    // if (this.inputArchivo)
    //   this.inputArchivo.value = null;
  }

  limpiarFormulario() {
    this.limpiarInputs();
    this.limpiarMensajes();
  }

  tablaPaisesHandler(pais: string) {
    if (pais != '') {
      this.nacionalidad = pais;
      this.mensajeNacionalidad = '';
    }
  }
}
