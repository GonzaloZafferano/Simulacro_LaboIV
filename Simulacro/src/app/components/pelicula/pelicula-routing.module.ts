import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';

const routes: Routes =
  [    
    {
      path: '',
      children: [
        { path: '', component: PeliculaListadoComponent },
        { path: 'alta', component: PeliculaAltaComponent },
        { path: 'listado', component: PeliculaListadoComponent }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculaRoutingModule { }
