import { ValidatorFn, AbstractControl, ValidationErrors, AsyncValidatorFn } from "@angular/forms";
import { map } from "rxjs";

//METODOS DECLARADOS DE ESTA FORMA SIRVEN PARA APLICARSE SOBRE EL FORMULARIO EN GENERAL, NO INDIVIDUALMENTE.
//ES POR ESO QUE RECIBEN AL 'formGroup' Y NO AL 'control'
export function validarCampoNumero(nombreCampo: string): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: any } | null => {
        const campoAValidar = formGroup.get(nombreCampo);
        const errors: any = [];
        //CARGO LOS DISTINTOS ERRORES QUE PUEDE TENER.
        
        if (campoAValidar?.value === '' || campoAValidar?.value == null || campoAValidar?.value == undefined)
            errors.campoVacio = { hayError: true, mensaje: 'Campo requerido.' };
        else if (isNaN(campoAValidar?.value))
            errors.textoInvalido = { hayError: true, mensaje: 'Solo se pueden ingresar caracteres numericos.' };
        else if (campoAValidar?.value <= 0)
            errors.valorInvalido = { hayError: true, mensaje: 'Debe ingresar un valor mayor a 0.' };

        //SI TIENE ERRORES, LOS SETEO AL CONTROL:
        if (Object.keys(errors).length) {
            campoAValidar?.setErrors(errors);
            return errors;
        }
        campoAValidar?.setErrors(null);
        return null;
    }
}

//METODOS DECLARADOS DE ESTA FORMA SIRVEN PARA APLICARSE SOBRE EL CONTROL EN PARTICULAR, 
//NO DE FORMA GENERAL SOBRE EL FORMULARIO.
//ES POR ESO QUE RECIBEN AL 'control' Y NO AL 'formGroup'
export function validarCampoCadena(): ValidatorFn {
    return (control: AbstractControl): [key: string, value: any] | null => {
        const campoAValidar = control;
        const errors: any = [];
      
        //CARGO LOS DISTINTOS ERRORES QUE PUEDE TENER.
        if (campoAValidar?.value == '' || campoAValidar?.value == null || campoAValidar?.value == undefined)
            errors.campoVacio = { hayError: true, mensaje: 'Campo requerido.' };
        //SI TIENE ERRORES, LOS SETEO AL CONTROL:
        if (Object.keys(errors).length) {
            campoAValidar?.setErrors(errors);
            return errors;
        }
        campoAValidar?.setErrors(null);
        return null;
    }
}

export function validarCampoFecha(): ValidatorFn {
    return (control: AbstractControl): [key: string, value: any] | null => {
        const campoAValidar = control;
        const errors: any = [];

        //CARGO LOS DISTINTOS ERRORES QUE PUEDE TENER.
        if (campoAValidar?.value == '' || campoAValidar?.value == null || campoAValidar?.value == undefined)
            errors.campoVacio = { hayError: true, mensaje: 'Campo requerido / fecha invalida.' };
        else {
            let fecha = new Date(campoAValidar.value).getTime();
            let fechaMaxima = new Date('2100-12-31').getTime();
            let fechaMinima = new Date('1900-01-01').getTime();
            if (fecha > fechaMaxima || fecha < fechaMinima) {
                errors.fechaInvalida = { hayError: true, mensaje: 'Fecha invalida. Solo se aceptan fechas entre 1900-01-01 y 2100-12-31' };
            }
        }
        //SI TIENE ERRORES, LOS SETEO AL CONTROL:
        if (Object.keys(errors).length) {
            campoAValidar?.setErrors(errors);
            return errors;
        }
        campoAValidar?.setErrors(null);
        return null;
    }
}

export function validarCampoSelect(): ValidatorFn {
    return (control: AbstractControl): [key: string, value: any] | null => {
        const campoAValidar = control;
        const errors: any = [];

        //CARGO LOS DISTINTOS ERRORES QUE PUEDE TENER.
        if (campoAValidar?.value == '' || campoAValidar?.value == null ||
            campoAValidar?.value == undefined || campoAValidar?.value == -1)
            errors.campoVacio = { hayError: true, mensaje: 'Campo requerido.' };

        //SI TIENE ERRORES, LOS SETEO AL CONTROL:
        if (Object.keys(errors).length) {
            campoAValidar?.setErrors(errors);
            return errors;
        }
        campoAValidar?.setErrors(null);
        return null;
    }
}

export function validarCampoArchivo(): ValidatorFn {
    return (control: AbstractControl): [key: string, value: any] | null => {
        const campoAValidar = control;
        const errors: any = [];    
        
        //CARGO LOS DISTINTOS ERRORES QUE PUEDE TENER.
        if (campoAValidar?.value == '' || campoAValidar?.value == null || campoAValidar?.value == undefined)
            errors.campoVacio = { hayError: true, mensaje: 'Campo requerido.' };
        else {
            var nombreArchivo = campoAValidar?.value;
            var indicePunto = nombreArchivo.lastIndexOf(".") + 1;
            var extension = nombreArchivo.substr(indicePunto, nombreArchivo.length).toLowerCase();
            if (extension != "jpg" && extension != "jpeg" && extension != "png")
                errors.archivoInvalido = { hayError: true, mensaje: "Solo se admiten archivos de tipo jpg | jpeg | png." };
        }
        //SI TIENE ERRORES, LOS SETEO AL CONTROL:
        if (Object.keys(errors).length) {
            campoAValidar?.setErrors(errors);
            return errors;
        }
        campoAValidar?.setErrors(null);
        return null;
    }
}


// export function validarSiUsuarioExiste(fuService: FirestoreUsuariosService): ValidatorFn {
//     return (control: AbstractControl) => {
//         const nombreUsuario = control.value;
//         return fuService.traerListaDeCorreosFiltrada(nombreUsuario)
//             .then(usuarios => {
//                 if (usuarios.length > 0) {
//                     const objError = { errorUsuario: "El nombre de usuario ya existe." };
//                     control.setErrors(objError);
//                     return objError;
//                 }
//                 return null;
//             })
//     };
// };




// export function validarConfirmacionDeClave(minCaracteres: number): ValidatorFn {
//     return (formGroup: AbstractControl): { [key: string]: any } | null => {
//         const clave = formGroup.get('clave');
//         const confirmarClave = formGroup.get('confirmarClave');
//         const errors: any = {};

//         if (clave?.value !== confirmarClave?.value)
//             errors['clavesDistintas'] = { hayError: true, mensajeError: 'Las clave y confirmación NO conciden.' };

//         if (confirmarClave == null || confirmarClave.value == null || (confirmarClave.value != '' && confirmarClave.value.length < 4))
//             errors.longitudInvalida = { hayError: true, mensajeError: `La confirmación de clave debe contener por lo menos ${minCaracteres} caracteres. \n` };

//         if (Object.keys(errors).length) {
//             formGroup.get('confirmarClave')?.setErrors(errors);
//             return errors;
//         }
//         formGroup.get('confirmarClave')?.setErrors(null);
//         return null;
//     };
// }

// export function validarCorreo(): ValidatorFn {
//     return (control: AbstractControl) => {
//         const patronCorreo = /^([a-zA-Z0-9\.]+@+[a-zA-Z]+(\.)+[a-zA-Z]{2,3})$/;
//         let mensajeError = '';
//         let error = false;

//         if (control != null && control.value != null && control.value.length > 0 && !patronCorreo.test(control.value)) {
//             mensajeError += "El formato de correo electrónico es invalido. "
//             error = true;
//         }

//         if (error) {
//             const objError = { errorCorreo: mensajeError };
//             control?.setErrors(objError);
//             return objError;
//         }

//         control?.setErrors(null);
//         return null;
//     };
// }

// export function validarSiUsuarioExiste(fuService: FirestoreUsuariosService): ValidatorFn {
//     return (control: AbstractControl) => {
//         const nombreUsuario = control.value;
//         return fuService.traerListaDeCorreosFiltrada(nombreUsuario)
//             .then(usuarios => {
//                 if (usuarios.length > 0) {
//                     const objError = { errorUsuario: "El nombre de usuario ya existe." };
//                     control.setErrors(objError);
//                     return objError;
//                 }
//                 return null;
//             })
//     };
// };

// export function validarSiUsuarioExisteAsync(fuService: FirestoreUsuariosService): AsyncValidatorFn {
//     return (control: AbstractControl) => {
//         const nombreUsuario = control.value;
//         return fuService.traerListaDeUsuariosFiltradaConObservable(nombreUsuario)
//             .pipe(map(usuarios => {
//                 if (usuarios.length > 0) {
//                     const objError = { errorUsuario: "El nombre de usuario ya existe." };
//                     control.setErrors(objError);
//                     return objError;
//                 }
//                 return null;
//             }));
//     };
// };

// export function validarSiCorreoExisteAsync(fuService: FirestoreUsuariosService): AsyncValidatorFn {
//     return (control: AbstractControl) => {
//         const correo = control.value;
//         return fuService.traerListaDeCorreosFiltradaConObservable(correo)
//             .pipe(map(correos => {
//                 if (correos.length > 0) {
//                     let mensajeError = "El correo electrónico ingresado ya existe.";
//                     const objError = { errorCorreo: mensajeError };
//                     control.setErrors(objError);
//                     return objError;
//                 }
//                 return null;
//             }));
//     };
// };