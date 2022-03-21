import { createReducer, on } from "@ngrx/store";
import { AppState, initialState } from "./app.state";
import { loading, loadingstop } from './app.actions';


export const AppStateReducer = createReducer(
    initialState,

    on( loading, ( state: AppState ) => ({
        ...state,
        loading: true
    })),

    on( loadingstop, ( state: AppState ) => ({
        ...state, 
        loading: false
    }))
);