import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'peliculas', loadChildren: () => import('./modules/pelicula/pelicula.module').then(m => m.PeliculaModule)
  },
  {
    path: 'actor', loadChildren: () => import('./modules/actor/actor.module').then(m => m.ActorModule)
  },
  { path: 'busqueda', loadChildren: () => import('./modules/busqueda/busqueda.module').then(m => m.BusquedaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
