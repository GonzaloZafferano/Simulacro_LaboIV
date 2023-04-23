import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'peliculas', loadChildren: () => import('./components/pelicula/pelicula.module').then(m => m.PeliculaModule)
  },
  {
    path: 'actor', loadChildren: () => import('./components/actor/actor.module').then(m => m.ActorModule)
  },
  { path: 'busqueda', loadChildren: () => import('./busqueda/busqueda.module').then(m => m.BusquedaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
