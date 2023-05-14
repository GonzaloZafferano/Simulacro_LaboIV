import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorPeliculaComponent } from './components/actor-pelicula/actor-pelicula.component';
import { AltaActoresComponent } from './pages/alta-actores.component';

const routes: Routes = [    
  {
    path: '',
    children: [
      { path: '', component: ActorPeliculaComponent },
      { path: 'alta', component: AltaActoresComponent },
      { path: 'listado', component: ActorListadoComponent },
      { path: 'actorpelicula', component: ActorPeliculaComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorRoutingModule { }
