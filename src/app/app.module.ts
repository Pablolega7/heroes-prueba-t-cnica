//ANGULAR//
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularSvgIconModule } from 'angular-svg-icon';
//FIREBASE//
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
//NGRX//
import { StoreModule } from '@ngrx/store';
import { MAIN_REDUCER } from './main.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HerosEffects } from './store/heroesState/heroes.effects';
//COMPONENTS//
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NavbarHeroesComponent } from './shared/navbar-heroes/navbar-heroes.component';
import { AppComponent } from './app.component';
import { NewheroeComponent } from './core/newheroe/newheroe.component';
import { HomeComponent } from './core/home/home.component';
//MODULO DE ANGULAR MATERIAL//
import { MaterialModule } from './material/material.module';
//MODULO DE RUTAS//
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarHeroesComponent,
    NewheroeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularSvgIconModule.forRoot(),
    StoreModule.forRoot(MAIN_REDUCER),
    EffectsModule.forRoot([ HerosEffects ]),
    StoreDevtoolsModule.instrument({
      maxAge: 100, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
