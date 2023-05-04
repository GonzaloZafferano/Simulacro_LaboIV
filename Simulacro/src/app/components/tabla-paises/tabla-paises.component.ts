import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //El HttpClientModule se DEBE insertar en el array de imports, del APP.MODULE 

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent {
  constructor(private http: HttpClient) { }
@Input() estilos : any ;
  @Output() OnPaisSeleccionado = new EventEmitter<string>();
  paises: any[] = [];
  ngOnInit() {
    let r = this.http.get<any[]>('https://restcountries.com/v2/all?lang=es').subscribe(x => {
      this.paises = x;

    });
  }
  // listaPaises: any[] = [
  //   {
  //     nombre: 'Argentina',
  //     ruta: 'assets/banderas/Arg.png'
  //   },
  //   {
  //     nombre: 'Brasil',
  //     ruta: 'assets/banderas/Brasil.png'
  //   },
  //   {
  //     nombre: 'España',
  //     ruta: 'assets/banderas/Esp.png'
  //   },
  //   {
  //     nombre: 'Estados Unidos',
  //     ruta: 'assets/banderas/Usa.png'
  //   }
  // ];

  paisSeleccionado(pais: string) {
    this.OnPaisSeleccionado.emit(pais);
  }
}
