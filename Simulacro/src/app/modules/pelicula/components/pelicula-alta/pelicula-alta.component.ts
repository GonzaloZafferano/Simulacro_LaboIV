import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/models/Actor';
import { Pelicula } from 'src/app/models/Pelicula';
import { TipoPelicula } from 'src/app/models/TipoPelicula';
import { PeliculasService } from 'src/app/services/peliculas/peliculas.service';
import { validarCampoArchivo, validarCampoCadena, validarCampoFecha, validarCampoNumero, validarCampoSelect } from 'src/app/validaciones/validaciones';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})

export class PeliculaAltaComponent {

  guardando: boolean = false;
  foto: string = '';
  actor?: Actor;
  tiposDePelicula: any = [];
  form!: FormGroup;

  public get cantidadDePublico() {
    return this.form?.get('cantidadDePublico');
  }
  public set cantidadDePublico(value: any) {
    this.form?.get('cantidadDePublico')?.patchValue(value);
  }

  get fotoPelicula() {
    return this.form?.get('fotoPelicula');
  }
  set fotoPelicula(value: any) {
    this.form?.get('fotoPelicula')?.patchValue(value);
  }

  get actorNombreCompleto() {
    return this.form?.get('actorNombreCompleto');
  }
  set actorNombreCompleto(value: any) {
    this.form?.get('actorNombreCompleto')?.patchValue(value);
  }

  get tipoPelicula() {
    return this.form?.get('tipoPelicula');
  }
  set tipoPelicula(value: any) {
    this.form?.get('tipoPelicula')?.patchValue(value);;
  }

  get fechaEstreno() {
    return this.form?.get('fechaEstreno');
  }
  set fechaEstreno(value: any) {
    this.form?.get('fechaEstreno')?.patchValue(value);;
  }

  get nombre() {
    return this.form?.get('nombre');
  }
  set nombre(value: any) {
    this.form?.get('nombre')?.patchValue(value);;
  }

  constructor(private peliculaService: PeliculasService) {
    this.tiposDePelicula = Object.entries(TipoPelicula).filter(e => isNaN(e[0] as any)).map(e => ({ text: e[0], value: e[1] }));
    this.tiposDePelicula.unshift({ text: '', value: -1 });
    this.validar();
  }

  guardar() {
    if (!this.form.invalid) {
      this.guardando = true;

      let pelicula = new Pelicula();
      pelicula.nombre = this.nombre.value;
      pelicula.tipoPelicula = Number(this.tipoPelicula.value);
      pelicula.fechaDeEstreno = new Date(this.fechaEstreno.value.replace('-', '/'));
      pelicula.cantidadPublico = Number(this.cantidadDePublico.value);
      pelicula.rutaFoto = this.foto;
      pelicula.actor = this.actor;

      this.peliculaService.cargarPeliculaDB(pelicula)
        .then(x => {
          Swal.fire({
            title: 'Alta exitosa!',
            text: `Se ha guardado la pelicula '${pelicula.nombre}'`,
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

  //METODOS PARA OBTENER LA IMAGEN
  //1)
  imagenCargada(event: any = null) {
    if (event != null && event.target.matches("[type=file]")) {
      let hayError = this.validarImagen(event);
      if (!hayError)
        this.obtenerUrlDeImagen(event);
      else
        this.foto = '';
    }
  }
  //2)
  validarImagen(event: any) {
    let errorConArchivo = false;
    var nombreArchivo = event.target.value;
    var indicePunto = nombreArchivo.lastIndexOf(".") + 1;
    var extension = nombreArchivo.substr(indicePunto, nombreArchivo.length).toLowerCase();
    if (extension != "jpg" && extension != "jpeg" && extension != "png") {
      errorConArchivo = true;
    }
    return errorConArchivo;
  }
  //3)
  obtenerUrlDeImagen(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = (e: any) => {
      this.foto = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  limpiarFormulario() {
    this.foto = ''; //EL QUE TIENE LA RUTA x64
    this.fotoPelicula = ''; //El que tiene la ruta del front.
    this.actorNombreCompleto = '';
    this.cantidadDePublico = 0;
    this.fechaEstreno = null;
    this.nombre = '';
    this.tipoPelicula = -1;
  }

  actorSeleccionado(actor: Actor) {
    if (actor) {
      this.actor = actor;
      this.actorNombreCompleto = actor.nombre;
    }
  }

  validar(): void {
    this.form = new FormGroup
      (
        {
          cantidadDePublico: new FormControl('',),
          nombre: new FormControl('', { validators: [validarCampoCadena()] }),
          fechaEstreno: new FormControl('', { validators: [validarCampoFecha()] }),
          tipoPelicula: new FormControl('', { validators: [validarCampoSelect()] }),
          actorNombreCompleto: new FormControl('', { validators: [validarCampoCadena()] }),
          fotoPelicula: new FormControl('', { validators: [validarCampoArchivo()] }),
        },
        [validarCampoNumero('cantidadDePublico')]
      );
  }
}
