import { Component, OnInit } from '@angular/core';
import { Pelicula, TipoPelicula } from 'src/app/models/Pelicula';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { PeliculasService } from 'src/app/services/peliculas/peliculas.service';

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

      let ultimoId = peliculas.length > 0 ?  Math.max(...peliculas.map(obj => obj.id)) : 0;

      this.obtenerBase64String()
        .then(x => {
          let pelicula = new Pelicula();
          pelicula.id = ++ultimoId;
          pelicula.nombre = this.nombre;
          pelicula.tipoPelicula = Number(this.tipoPelicula);
         //pelicula.rutaFoto = this.foto;
          pelicula.fechaDeEstreno = new Date(this.fechaEstreno);
          pelicula.cantidadPublico = Number(this.cantidadDePublico);
          peliculas.push(pelicula);
          this.peliculasService.cargarPeliculas(peliculas);
          this.limpiarFormulario();
        })
        .catch(err => console.error(err));
    }
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
        this.foto = event.target.files[0].name;
        this.archivoDeFoto = event.target.files[0];
      }
      else
        this.foto = '';
    }

    if (this.foto != '')
      this.mensajeFoto = '';
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

  obtenerBase64String() {
    let file = this.archivoDeFoto;
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result?.toString().substr(reader.result.toString().indexOf(',') + 1));
      reader.onerror = error => reject(error);
    })
      .then(x => {
        this.foto = x as string;
      })
  }
}
