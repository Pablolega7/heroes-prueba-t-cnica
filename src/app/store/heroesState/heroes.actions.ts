import { createAction, props } from "@ngrx/store";
import { HeroesModel } from '../../models/heroes.models';




export enum Types {

    GO_HOME                     = '[Heroes State] Navigate to Home',
    
    ADD_TEMP_HEROE              = '[Heroes State] Temp Heroe Add',
    DELETE_TEMP_HEROE           = '[Heroes State] Temp Heroe Delete',
      
    GET_ALL_HEROES              = '[Heroes State] Get All Heroes',
    GET_ALL_HEROES_SUCCESS      = '[Heroes State] Get All Heroes: Success',
    GET_ALL_HEROES_ERROR        = '[Heroes State] Set All Heroes: Error',
    
    SET_ALL_HEROES_DATA         = '[Heroes State] Set All Heroes',
    SET_ALL_HEROES_DATA_SUCCESS = '[Heroes State] Set All Heroes: Success',
    SET_ALL_HEROES_DATA_ERROR   = '[Heroes State] Set All Heroes: Error',
  
    DELETE_HEROE                = '[Heroes State] Delete Heroes',
    DELETE_HEROE_SUCCESS         = '[Heroes State] Delete Heroes: Success',
    DELETE_HEROE_ERROR           = '[Heroes State] Delete Heroes: Error',
  
    SEARCH_FILTER_HEROE         = '[Notes State] Search Filter Heroes'
  };
  
    //GO HOME
    export const goHome                   = createAction( Types.GO_HOME );
  
    // HEROE TEMPORAL//
    export const addHeroeTemp             = createAction( Types.ADD_TEMP_HEROE, props<{ heroe: HeroesModel }>() );
    export const deleteHeroeTemp          = createAction( Types.DELETE_TEMP_HEROE );
      
    // GET HEROES//     
    export const getAllHeroes             = createAction( Types.GET_ALL_HEROES );
    export const getAllHeroesSuccess      = createAction( Types.GET_ALL_HEROES_SUCCESS, props<{ heroes: HeroesModel[] }>() );
    export const getAllHeroesError        = createAction( Types.GET_ALL_HEROES_ERROR, props<{ error: any }>());
  
    //SET HEROES DATA// 
    export const setAllHeroesData         = createAction( Types.SET_ALL_HEROES_DATA, props<{ heroe: HeroesModel }>());
    export const setAllHeroesDataSuccess  = createAction( Types.SET_ALL_HEROES_DATA_SUCCESS );
    export const setAllHeroesDataError    = createAction( Types.SET_ALL_HEROES_DATA_ERROR, props<{ error: any }>());
  
    //DELETE HEROES// 
    export const deleteHeroe              = createAction( Types.DELETE_HEROE, props<{ heroe: HeroesModel }>());
    export const deleteHeroeSuccess       = createAction( Types.DELETE_HEROE_SUCCESS );
    export const deleteHeroeError         = createAction( Types.DELETE_HEROE_ERROR, props<{ error: any }>());
  
    //SEARCH FILTER HEROE//
    export const searchFilterHeroe        = createAction( Types.SEARCH_FILTER_HEROE, props<{ filter: string }>());