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
    DetallePeliculaComponent,
    TablaPaisesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
