import { TipoPelicula } from "./TipoPelicula";

export class Pelicula {
    id: number;
    nombre: string;
    tipoPelicula: TipoPelicula;
    fechaDeEstreno: Date;
    cantidadPublico: number;
    rutaFoto: string;
}