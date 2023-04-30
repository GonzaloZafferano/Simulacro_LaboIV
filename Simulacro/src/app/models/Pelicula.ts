import { TipoPelicula } from "./TipoPelicula";

export class Pelicula {
    id: number;
    nombre: string;
    tipoPelicula: TipoPelicula;
    fechaDeEstreno: any;
    cantidadPublico: number;
    rutaFoto: string;
}