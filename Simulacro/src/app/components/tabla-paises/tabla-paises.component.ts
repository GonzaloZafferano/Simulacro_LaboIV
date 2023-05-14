import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //El HttpClientModule se DEBE insertar en el array de imports, del APP.MODULE 

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent {
  constructor(private http: HttpClient) { }
  spinner: boolean = true;
  @Input() anchoSpinner: string = '';
  @Input() estilos: any;
  @Output() OnPaisSeleccionado = new EventEmitter<any>();
  paises: any[] = [];
  suscripcion: any;
  ngOnInit() {                              
    this.suscripcion = this.http.get<any[]>('https://restcountries.com/v2/all?').subscribe(x => {
      this.paises = x.sort((x,y)=>{
        if (x.translations.es < y.translations.es) 
          return -1;        
        if (x.translations.es > y.translations.es) 
          return 1;        
        return 0;
      }); 
      this.spinner = false;
    });
  }

  ngOnDestroy() {
    if (this.suscripcion) {
      this.suscripcion.unsubscribe();
    }
  }

  paisSeleccionado(pais: string) {
    this.OnPaisSeleccionado.emit(pais);
  }
}
