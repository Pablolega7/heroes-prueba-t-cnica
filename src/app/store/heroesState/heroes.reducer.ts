import { createReducer, on } from "@ngrx/store";
import { initialState, HeroesState } from './heroes.state';
import { addHeroeTemp, deleteHeroeTemp, getAllHeroes, getAllHeroesSuccess, getAllHeroesError, setAllHeroesData, setAllHeroesDataSuccess, setAllHeroesDataError, deleteHeroe, deleteHeroeSuccess, deleteHeroeError, searchFilterHeroe } from './heroes.actions';




export const HeroesStateReducer = createReducer(
    initialState,

    //Heroe TEMP//
    on( addHeroeTemp, ( state: HeroesState, { heroe } ) => ({
        ...state,
        heroeTemp: heroe
    })),
    on( deleteHeroeTemp, ( state: HeroesState ) => ({
        ...state,
        heroeTemp: null
    })),

    //GET HEROES//
    on( getAllHeroes, ( state: HeroesState ) => ({
        ...state,
        loading: true
    })),

    on( getAllHeroesSuccess, ( state: HeroesState, { heroes } ) => ({
        ...state,
        loading: false,
        heroes
    })),

    on( getAllHeroesError, ( state: HeroesState, { error } ) => ({
        ...state,
        loading: false,
        error
    })),

    //SET HEROES DATA//
    on( setAllHeroesData, ( state: HeroesState, { heroe } ) => ({
        ...state,
        loading: true,
    })),

    on( setAllHeroesDataSuccess, ( state: HeroesState  ) => ({
        ...state,
        loading: false,
        heroeTemp: null
    })),

    on( setAllHeroesDataError, ( state: HeroesState, { error } ) => ({
        ...state,
        loading: false,
        error
    })),

    //DELETE HEROE//
    on( deleteHeroe, ( state: HeroesState, { heroe } ) => ({
        ...state,
        loading: true,
        heroeTemp: heroe
    })),
    on( deleteHeroeSuccess, ( state: HeroesState ) => ({
        ...state,
        loading: false,
        heroeTemp: null
    })),

    on( deleteHeroeError, ( state: HeroesState, { error } ) => ({
        ...state,
        loading: false,
        error
    })),

    //SEARCH FILTER HEROE//
    on( searchFilterHeroe, ( state: HeroesState, { filter } ) => ({
        ...state,
        search : filter
    })),
);