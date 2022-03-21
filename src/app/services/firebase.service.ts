
import { Injectable } from '@angular/core';
import { collection, doc, Firestore, getFirestore, setDoc } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { deleteDoc, getDocs, query } from 'firebase/firestore';
import { MainState } from '../main.reducer';
import { HeroesModel, Heroes } from '../models/heroes.models';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor( public db    : Firestore,
               private store: Store<MainState> ) { }

  //FUNCION DE FIREBASE PARA SETEAR LOS HEROES//
  setHeroes( heroes: HeroesModel ){
    const newHeroes = doc( getFirestore(), 'heroes', heroes.id );
    return setDoc( newHeroes, { ...heroes }, { merge: true });
  };

  //FUNCION DE FIREBASE PARA TRAER LOS HEROES//
  async getAllHeroes( ){
    const heroesCollection = collection(getFirestore(), "heroes");
    const q = query( heroesCollection );
    let documents: HeroesModel[] = [];
    const queryCollection = await getDocs(q);
     queryCollection.forEach( doc => {
        let  {
          superHero, characters, id, power, publisher, favorite } = doc.data();
          documents.push(new Heroes( superHero, characters, id, power, publisher, favorite ));
      });
    return documents;
  };

  //FUNCION DE FIREBASE PARA ELIMINAR HEROES//
  async deleteHeroe( heroe: HeroesModel ){
    await deleteDoc( doc( getFirestore(), "heroes", heroe.id ));
  };

  //FUNCION PARA FILTAR LOS HEROES DE FIREBASE//
  setMultipleHeroes( heroes: HeroesModel[], id: string ){
    heroes.forEach(( heroe ) => this.setHeroes({...heroe, superHero: id}));
  };
};
