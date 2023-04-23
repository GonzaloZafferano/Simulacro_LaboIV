export class Pelicula {
    id: number;
    nombre: string;
    tipoPelicula: TipoPelicula;
    fechaDeEstreno: Date;
    cantidadPublico: number;
    rutaFoto: string;
}

export enum TipoPelicula {
    terror,
    comedia,
    amor,
    otros
}