import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { from, of } from "rxjs";
import { catchError, map, switchMap, take } from "rxjs/operators";
import { FirebaseService } from "src/app/services/firebase.service";
import { getAllHeroes, getAllHeroesSuccess, getAllHeroesError, setAllHeroesData, setAllHeroesDataSuccess, setAllHeroesDataError, deleteHeroe, deleteHeroeSuccess, deleteHeroeError, goHome } from './heroes.actions';



@Injectable()

export class HerosEffects {

    constructor( private actions$       : Actions, 
                 private firebaseService: FirebaseService,
                 private router         : Router ){};

    getHeroes$ = createEffect( () =>
    this.actions$.pipe(
      ofType( getAllHeroes ),
      switchMap( () =>  from( this.firebaseService.getAllHeroes()).pipe(
       take( 1 ),
       map( heroes  => getAllHeroesSuccess({ heroes }) ),
        catchError( error => of( getAllHeroesError({ error }))),
      ),
     ),
    ),
 );

     setHeroeData$ = createEffect( () =>
     this.actions$.pipe(
      ofType( setAllHeroesData ),
      switchMap( ({ heroe }) =>  from(this.firebaseService.setHeroes( heroe )).pipe(
       take(1),
       map( () => setAllHeroesDataSuccess() ),
        catchError(error => of( setAllHeroesDataError({ error })))
      ),
    ),
  ),
 );

     goHome$ = createEffect( () =>
     this.actions$.pipe(
      ofType( setAllHeroesDataSuccess, setAllHeroesDataError ),
      map(() => { 
       this.router.navigate(['/home']);
       return goHome();
      }
     ),
    ),
  );

  deleteHeroe$ = createEffect( () =>
     this.actions$.pipe(
      ofType( deleteHeroe ),
      switchMap( ({ heroe }) =>  from( this.firebaseService.deleteHeroe( heroe )).pipe(
       take(1),
       map( () => deleteHeroeSuccess() ),
        catchError(error => of( deleteHeroeError({ error })))
      ),
    ),
  ),
 );
};
