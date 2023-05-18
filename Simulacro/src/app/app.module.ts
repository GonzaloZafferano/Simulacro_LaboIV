import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';

import { ActorAltaComponent } from './modules/actor/components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './modules/actor/components/actor-listado/actor-listado.component';
import { BusquedaComponent } from './modules/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './modules/pelicula/components/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './modules/pelicula/components/pelicula-listado/pelicula-listado.component';
import { DetallePeliculaComponent } from './modules/pelicula/components/detalle-pelicula/detalle-pelicula.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TablaActorComponent } from './components/tabla-actor/tabla-actor.component';
import { ActorPeliculaComponent } from './modules/actor/components/actor-pelicula/actor-pelicula.component'; //PARA USAR HTTP. El uso esta en tabla-paises
import { PeliculasDeActorComponent } from './modules/actor/components/peliculas-de-actor/peliculas-de-actor.component';
import { DetallesActorComponent } from './modules/actor/components/detalles-actor/detalles-actor.component';
import { DetallesPaisComponent } from './modules/actor/components/detalles-pais/detalles-pais.component';
import { AltaActoresComponent } from './modules/actor/pages/alta-actores.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AltaActoresComponent,
    BusquedaComponent,
    BienvenidoComponent,
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    TablaPaisesComponent,
    TablaActorComponent,
    ActorPeliculaComponent,
    PeliculasDeActorComponent,
    DetallesActorComponent,
    DetallesPaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    HttpClientModule //PARA USAR HTTP. El uso esta en tabla-paises

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
