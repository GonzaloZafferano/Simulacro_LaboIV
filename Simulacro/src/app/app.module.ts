import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { PeliculaAltaComponent } from './components/pelicula/components/pelicula-alta/pelicula-alta.component';
import { ActorListadoComponent } from './components/actor/components/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './components/pelicula/components/pelicula-listado/pelicula-listado.component';
import { ActorAltaComponent } from './components/actor/components/actor-alta/actor-alta.component';
import { TablaPeliculaComponent } from './tabla-pelicula/tabla-pelicula.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    BienvenidoComponent,
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
