import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent {
  @Output() OnPaisSeleccionado = new EventEmitter<string>();

  listaPaises: any[] = [
    {
      nombre: 'Argentina',
      ruta: 'assets/banderas/Arg.png'
    },
    {
      nombre: 'Brasil',
      ruta: 'assets/banderas/Brasil.png'
    },
    {
      nombre: 'España',
      ruta: 'assets/banderas/Esp.png'
    },
    {
      nombre: 'Estados Unidos',
      ruta: 'assets/banderas/Usa.png'
    }
  ];

  paisSeleccionado(pais: string) {
    this.OnPaisSeleccionado.emit(pais);
  }
}
