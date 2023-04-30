import { TipoPelicula } from "./TipoPelicula";

export class Pelicula {
    id: string;
    nombre: string;
    tipoPelicula: TipoPelicula;
    fechaDeEstreno: any;
    cantidadPublico: number;
    rutaFoto: string;
}