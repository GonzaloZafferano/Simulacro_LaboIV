import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Actor } from 'src/app/models/Actor';
import { Pelicula } from 'src/app/models/Pelicula';
import { ActoresService } from 'src/app/services/actores/actores.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { validarCampoCadena, validarCampoFecha, validarCampoSelect, validarCampoArchivo, validarCampoNumero } from 'src/app/validaciones/validaciones';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent {
  
  guardando: boolean = false;
  @Input() pais: any;
  form!: FormGroup;

  constructor(private actorService: ActoresService) {
    this.validar();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['pais']) {
      let pais = changes['pais'] as any;
      if (pais && pais.currentValue)
        this.nacionalidad = pais.currentValue.translations.es;
    }
  }

  public get nombre() {
    return this.form?.get('nombre');
  }
  public set nombre(value: any) {
    this.form?.get('nombre')?.patchValue(value);
  }

  get nacionalidad() {
    return this.form?.get('nacionalidad');
  }
  set nacionalidad(value: any) {
    this.form?.get('nacionalidad')?.patchValue(value);
  }

  get fechaNacimiento() {
    return this.form?.get('fechaNacimiento');
  }
  set fechaNacimiento(value: any) {
    this.form?.get('fechaNacimiento')?.patchValue(value);
  }

  get cantidadPeliculas() {
    return this.form?.get('cantidadPeliculas');
  }
  set cantidadPeliculas(value: any) {
    this.form?.get('cantidadPeliculas')?.patchValue(value);;
  }

  guardar() {
    if (!this.form.invalid) {
      this.guardando = true;

      let actor = new Actor();
      actor.nombre = this.nombre.value;
      actor.cantidadPeliculas = Number(this.cantidadPeliculas.value);
      actor.fechaNacimiento = new Date(this.fechaNacimiento.value.replace('-', '/'));  //Replace para que me tome bien la fecha   
      actor.pais = this.pais;

      this.actorService.cargarActoraDB(actor)
        .then(x => {
          Swal.fire({
            title: 'Alta exitosa!',
            text: `Se ha guardado el actor '${actor.nombre}'`,
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

  limpiarFormulario() {
    this.nombre = '';
    this.pais = null;
    this.nacionalidad = '';
    this.cantidadPeliculas = 0;
    this.fechaNacimiento = null;
  }

  validar(): void {
    this.form = new FormGroup
      (
        {
          nombre: new FormControl('', { validators: [validarCampoCadena()] }),
          cantidadPeliculas: new FormControl('',),
          fechaNacimiento: new FormControl('', { validators: [validarCampoFecha()] }),
          nacionalidad: new FormControl('', { validators: [validarCampoCadena()] }),
        },
        [validarCampoNumero('cantidadPeliculas')]
      );
  }
}