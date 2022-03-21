import { ActionReducerMap } from "@ngrx/store"
import { AppStateReducer } from "./store/appState/app.reducer";
import { AppState } from "./store/appState/app.state";
import { HeroesStateReducer } from "./store/heroesState/heroes.reducer";
import { HeroesState } from "./store/heroesState/heroes.state";


export interface MainState {
    appState: AppState,
    heroesState: HeroesState
};


export const MAIN_REDUCER : ActionReducerMap<MainState> = {
    appState: AppStateReducer,
    heroesState: HeroesStateReducer,
};