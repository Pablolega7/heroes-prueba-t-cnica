import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HeroesState } from './heroes.state';


export const selectHeroesState = createFeatureSelector<HeroesState>( 'heroeState' );


export const selectHeroeTemp = createSelector(
  selectHeroesState,
  (state: HeroesState ) => state.heroeTemp
);

export const selectHeroes = createSelector(
  selectHeroesState,
  ( state: HeroesState ) => state.heroes
);

export const selectSearch = createSelector(
  selectHeroesState,
  ( state: HeroesState ) => state.search
);
