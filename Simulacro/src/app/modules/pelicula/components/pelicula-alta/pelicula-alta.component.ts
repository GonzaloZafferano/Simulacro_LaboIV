import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/Pelicula';
import { TipoPelicula } from 'src/app/models/TipoPelicula';
import { PeliculasService } from 'src/app/services/peliculas/peliculas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})

export class PeliculaAltaComponent {
  id: string = '';
  nombre: string = '';
  tipoPelicula: string = '-1';
  fechaEstreno: string = '';
  cantidadDePublico: number = 0;
  foto: string = '';
  archivoDeFoto: File;
  inputArchivo: any;

  tiposDePelicula: any = [];
  mensajeNombre: string = '';
  mensajeTipoPelicula: string = '';
  mensajeFechaEstreno: string = '';
  mensajeCantidadPublico: string = '';
  mensajeFoto: string = '';

  constructor(private peliculasService: PeliculasService) {
    this.tiposDePelicula = Object.entries(TipoPelicula).filter(e => isNaN(e[0] as any)).map(e => ({ text: e[0], value: e[1] }));
    this.tiposDePelicula.unshift({ text: '', value: -1 });
  }

  guardar() {
    let errorEnDatos = this.validarInputs();
    if (!errorEnDatos) {
      let peliculas = this.peliculasService.obtenerPeliculas();

      let ultimoId = peliculas.length > 0 ? Math.max(...peliculas.map(obj => obj.id)) : 0;

      let pelicula = new Pelicula();
      pelicula.id = ++ultimoId;
      pelicula.nombre = this.nombre;
      pelicula.tipoPelicula = Number(this.tipoPelicula);
      pelicula.fechaDeEstreno = new Date(this.fechaEstreno);
      pelicula.cantidadPublico = Number(this.cantidadDePublico);
      pelicula.rutaFoto = this.foto;

      peliculas.push(pelicula);
      this.peliculasService.cargarPeliculas(peliculas);

      Swal.fire({
        title: 'Alta exitosa!',
        text: `Se ha guardado la pelicula '${pelicula.nombre}'`,
        icon: 'success',
        timer: 0,
        confirmButtonText: 'Aceptar'
      });

      this.limpiarFormulario();
    }
  }


  inputChange(event: any = null) {
    if (this.nombre != '')
      this.mensajeNombre = "";

    if (this.cantidadDePublico != null && this.cantidadDePublico >= 1)
      this.mensajeCantidadPublico = "";

    if (this.fechaEstreno != '')
      this.mensajeFechaEstreno = "";

    if (this.tipoPelicula != '' && this.tipoPelicula != '-1')
      this.mensajeTipoPelicula = "";

    if (event != null && event.target.matches("[type=file]")) {
      this.inputArchivo = event.target;
      let hayError = this.validarImagen(event);
      if (!hayError) {
        this.obtenerUrlDeImagen(event);
      }
      else
        this.foto = '';
    }

    if (this.foto != '')
      this.mensajeFoto = '';
  }

  validarInputs(event: any = null) {
    let errorEnDatos = false;

    if (this.nombre == '') {
      this.mensajeNombre = "Debe ingresar un nombre para la película.";
      errorEnDatos = true;
    }

    if (this.cantidadDePublico == null || this.cantidadDePublico < 1) {
      this.mensajeCantidadPublico = "Debe ingresar una cantidad valida para la cantidad de público.";
      errorEnDatos = true;
    }

    if (this.fechaEstreno == '') {
      this.mensajeFechaEstreno = "Debe ingresar una fecha de estreno.";
      errorEnDatos = true;
    }

    if (this.tipoPelicula == '' || this.tipoPelicula == '-1') {
      this.mensajeTipoPelicula = "Debe ingresar un tipo de película";
      errorEnDatos = true;
    }

    if (this.mensajeFoto == '' && this.foto == '') {
      this.mensajeFoto = "Debe seleccionar un archivo para la foto.";
      errorEnDatos = true;
    } else if (this.mensajeFoto != '')
      errorEnDatos = true;

    return errorEnDatos;
  }

  validarImagen(event: any) {
    let errorConArchivo = false;
    var nombreArchivo = event.target.value;
    var indicePunto = nombreArchivo.lastIndexOf(".") + 1;
    var extension = nombreArchivo.substr(indicePunto, nombreArchivo.length).toLowerCase();
    if (extension != "jpg" && extension != "jpeg" && extension != "png") {
      this.mensajeFoto = "Solo se admiten archivos de tipo jpg, jpeg.";
      errorConArchivo = true;
    }

    return errorConArchivo;
  }

  obtenerUrlDeImagen(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = (e: any) => {
      this.foto = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  limpiarMensajes() {
    this.mensajeNombre = '';
    this.mensajeTipoPelicula = '';
    this.mensajeFechaEstreno = '';
    this.mensajeCantidadPublico = '';
    this.mensajeFoto = '';
  }

  limpiarInputs() {
    this.nombre = '';
    this.tipoPelicula = '-1';
    this.fechaEstreno = '';
    this.cantidadDePublico = 0;
    this.foto = '';

    if (this.inputArchivo)
      this.inputArchivo.value = null;
  }

  limpiarFormulario() {
    this.limpiarInputs();
    this.limpiarMensajes();
  }
}
