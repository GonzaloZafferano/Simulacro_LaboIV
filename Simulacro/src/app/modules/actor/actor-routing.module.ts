import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';

const routes: Routes = [    
  {
    path: '',
    children: [
      { path: '', component: ActorListadoComponent },
      { path: 'alta', component: ActorAltaComponent },
      { path: 'listado', component: ActorListadoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorRoutingModule { }
